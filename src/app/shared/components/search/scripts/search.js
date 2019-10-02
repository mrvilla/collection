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
import { fetchApi } from '../../../data/externtalData';

class Search extends Component {
	/**
	 * Class Properties
	 */
	$el = $(this.el);
	$searchBtn = $(this.options.selectors.searchBtn);
	$searchInput = $(this.options.selectors.searchInput);
	$searchFilmResults = $(this.options.selectors.searchFilmResults);
	$searchAlbumResults = $(this.options.selectors.searchAlbumResults);
	$searchBookResults = $(this.options.selectors.searchBookResults);

	/**
	 * Event & subscribe handling
	 */

	// Local Handlers
	get events() {
		return {
			submit: 'handleClick'
		};
	}

	handleClick = (evt, target) => {
		evt.preventDefault();
		//console.log('target: ', target);
		//console.log('evt: ', evt);
		const searchFilm = this.$searchInput.val();
		fetchApi(searchFilm).then(([dataSet1, dataSet2, dataSet3, dataSet4]) => {
			//console.log('movies: ', dataSet1,'albums: ', dataSet2, 'books: ', dataSet3);
			this.handleMovieData(dataSet1, dataSet2, dataSet3, dataSet4);
		});
	};

	handleMovieData(movieData, bookData, albumData, comicData) {
		console.log('movieData: ', movieData);
		console.log('bookData: ', bookData);
		console.log('albumData: ', albumData);
		console.log('comicData: ', comicData);

		this.renderSearchFilmTemplate(
			movieData.Poster,
			movieData.Title,
			movieData.Rated,
			movieData.Genre,
			movieData.Runtime,
			movieData.Plot,
			movieData.Director,
			movieData.Writer,
			movieData.Actors,
			movieData.Year
		);

		this.renderSearchBookTemplate(
			bookData.items[0].volumeInfo.title,
			bookData.items[0].volumeInfo.imageLinks.thumbnail,
			bookData.items[0].volumeInfo.authors,
			bookData.items[0].volumeInfo.categories,
			bookData.items[0].volumeInfo.ratingsCount,
			bookData.items[0].volumeInfo.pageCount,
			bookData.items[0].volumeInfo.publishedDate
		);

		this.renderSearchAlbumTemplate(
			albumData.results[1].title,
			albumData.results[1].cover_image
			//albumData.results[0].artist,
		);
	}

	renderSearchFilmTemplate(
		image,
		title,
		rated,
		genre,
		runTime,
		plot,
		director,
		writer,
		actor,
		year
	) {
		//console.log('Filmtitle: ', `${title}`);
		//console.log('Filmimage: ', `${image}`);
		const filmTemplate = ` 
			 <div class="search__album-container">
			     <div class="search__row"><div class="search__row-text">film</div></div>
				 <div class="search__img-wrapper"><img src="${image}" alt=""></div>
				 <div class="search__info">
					<div class="search__title-rated-year">
						<div class="search__title">${title} </div>
						<div class="search__rated">${rated}</div>
						<div class="search__year">${year}</div>
					</div>
					<div class="search__genre">${genre}</div>
					<div class="search__run-time">${runTime}</div>
					<div class="search__plot">${plot}</div>
					<div class="search__director">
						<span class="search__text">Director:</span> ${director}
					</div>
					<div class="search__writer"> 
						<span class="search__text">Writer:</span> ${writer}
					</div>
					<div class="search__actor">
						<span class="search__text">Actor:</span> ${actor}
					</div>
				 </div>
			</div>
         `;

		this.$searchFilmResults.html(filmTemplate);
	}

	renderSearchBookTemplate(title, image, author, categories, rated, pages, year) {
		//console.log('Booktitle: ', `${title}`);
		//console.log('Bookimage: ', `${image}`);
		const bookTemplate = `
			<div class="search__book-container">
				 <div class="search__row"><div class="search__row-text">book</div></div>
				 <div class="search__img-wrapper"><img src="${image}" alt=""></div>
				 <div class="search__info">
					<div class="search__title-rated-year">
						<div class="search__title">${title}</div>
						<div class="search__rated">${rated}</div>
						<div class="search__year">${year}</div>
					</div>
					<div class="search__categories">${categories}</div>
					<div class="search__pages">${pages} pages</div>
					<div class="search__author">
						<span class="search__text">Author:</span> ${author}
					</div>
				 </div>
			</div>
         `;

		this.$searchBookResults.html(bookTemplate);
	}

	renderSearchAlbumTemplate(title, image, artist) {
		//console.log('Albumtitle: ', `${title}`);
		//console.log('Albumimage: ', `${image}`);
		const albumTemplate = `
			<div class="search__film-container">
				 <div class="search__row"><div class="search__row-text">album</div></div>
				 <div class="search__img-wrapper"><img src="${image}" alt=""></div>
				 <div class="search__info">
					<div class="search__title">${title}</div>
					<div class="search__artist">${artist}</div>
				 </div>
			</div>
         `;

		this.$searchAlbumResults.html(albumTemplate);
	}

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
				searchFilmResults: '[data-js-item="search-results-film"]',
				searchAlbumResults: '[data-js-item="search-results-album"]',
				searchBookResults: '[data-js-item="search-results-book"]'
			},
			classes: {}
		};

		super(obj, options);
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default Search;
