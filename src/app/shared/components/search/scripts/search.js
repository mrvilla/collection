/**
 * Description of Search.
 * Class properties and decorators are supported.
 *
 * @module Search
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import $ from '@veams/query';
import Component from '@veams/component';
import { renderFilmTemplate, renderBookTemplate, renderAlbumTemplate } from './templates';
import { album_api_key, book_api_key, film_api_key } from '../../../data/config';

const APIS = {
		movies: {
			api: searchQuery =>
				`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=short&r=json&apikey=${filmKey}`,
			callback: data => data,
			getTemplate: data => renderFilmTemplate(data)
		},
		books: {
			api: searchQuery =>
				`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${bookKey}`,
			callback: data => data.items[0].volumeInfo,
			getTemplate: data => renderBookTemplate(data)
		},
		album: {
			api: searchQuery =>
				`https://api.discogs.com/database/search?q=${searchQuery}&token=${albumKey}`,
			callback: data => data.results[0],
			getTemplate: data => renderAlbumTemplate(data)
		}
	},
	filmKey = film_api_key,
	bookKey = book_api_key,
	albumKey = album_api_key;

class Search extends Component {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			selectors: {
				searchBtn: '[data-js-item="search-submit"]',
				searchInput: '[data-js-item="search-input"]',
				searchResults: '[data-js-item="search-results"]'
			},
			classes: {}
		};

		super(obj, options);
	}

	/**
	 * Class Properties
	 */
	$el = $(this.el);
	$searchBtn = $(this.options.selectors.searchBtn);
	$searchInput = $(this.options.selectors.searchInput);
	$searchResults = $(this.options.selectors.searchResults);

	/**
	 * Event & subscribe handling
	 */
	// Local Handlers
	get events() {
		return {
			submit: 'submitHandler'
		};
	}

	submitHandler = (evt, target) => {
		evt.preventDefault();

		const searchFilm = this.$searchInput.val();

		const promises = Object.keys(APIS).map(key =>
			fetch(APIS[key].api(searchFilm))
				.then(res => res.json())
				.then(data => APIS[key].callback(data))
				.then(data => APIS[key].getTemplate(data))
				.catch(err => console.log(err))
		);
		Promise.all(promises).then(data => this.renderTemplates(data));
	};

	renderTemplates(templates) {
		templates.forEach(template => this.$searchResults.append(template));
	}
	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default Search;
