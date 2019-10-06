export const renderFilmTemplate = ({
	Poster,
	Title,
	Rated,
	Genre,
	Runtime,
	Plot,
	Director,
	Writer,
	Actor,
	Year
}) => {
	return ` 
			 <div class="search__album-container">
			     <div class="search__row"><div class="search__row-text">film</div></div>
				 <div class="search__img-wrapper"><img src="${Poster}" alt=""></div>
				 <div class="search__info">
					<div class="search__title-rated-year">
						<div class="search__title">${Title} </div>
						<div class="search__rated">${Rated}</div>
						<div class="search__year">${Year}</div>
					</div>
					<div class="search__genre">${Genre}</div>
					<div class="search__run-time">${Runtime}</div>
					<div class="search__plot">${Plot}</div>
					<div class="search__director">
						<span class="search__text">Director:</span> ${Director}
					</div>
					<div class="search__writer"> 
						<span class="search__text">Writer:</span> ${Writer}
					</div>
					<div class="search__actor">
						<span class="search__text">Actor:</span> ${Actor}
					</div>
				 </div>
			</div>
         `;
};

export const renderBookTemplate = book => {
	return `
			<div class="search__book-container">
				 <div class="search__row"><div class="search__row-text">book</div></div>
				 <div class="search__img-wrapper"><img src="${book.imageLinks.thumbnail}" alt=""></div>
				 <div class="search__info">
					<div class="search__title-rated-year">
						<div class="search__title">${book.title}</div>
						<div class="search__rated">${book.ratingsCount}</div>
						<div class="search__year">${book.publishedDate}</div>
					</div>
					<div class="search__categories">${book.categories}</div>
					<div class="search__pages">${book.pageCount} pages</div>
					<div class="search__author">
						<span class="search__text">Author:</span> ${book.authors}
					</div>
				 </div>
			</div>
         `;
};

export const renderAlbumTemplate = ({ title, cover_image, artist }) => {
	return `
			<div class="search__film-container">
				 <div class="search__row"><div class="search__row-text">album</div></div>
				 <div class="search__img-wrapper"><img src="${cover_image}" alt=""></div>
				 <div class="search__info">
					<div class="search__title">${title}</div>
					<div class="search__artist">${artist}</div>
				 </div>
			</div>
         `;
};
