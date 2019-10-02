export function fetchApi(searchQuery) {
	// all api data
	const fetch1 = fetch(
		`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=short&r=json&apikey=932222db`
	)
		.then(res => res.json())
		.catch(err => console.log(err));

	const fetch2 = fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyBLHt098HKBFXPpLooZ10GLa_e32WwrZjI`
	)
		.then(res => res.json())
		.catch(err => console.log(err));

	const fetch3 = fetch(
		`https://api.discogs.com/database/search?q=${searchQuery}&token=HTGTujHTuaxPmsumyPVpdKswHUeRymcuqAoVbIei`
	)
		.then(res => res.json())
		.catch(err => console.log(err));

	const fetch4 = fetch(
		`https://comicvine.gamespot.com/api/volumes/?api_key=9ef4ea3b99257e15d1e53292bc300453c14f2712&format=json&filter=name:${searchQuery}`
	)
		.then(res => res.json())
		.catch(err => console.log(err));

	// var data = null;
	//
	// var xhr = new XMLHttpRequest();
	// xhr.withCredentials = true;
	//
	// xhr.addEventListener("readystatechange", function () {
	// 	if (this.readyState === 4) {
	// 		console.log('goodreads:', this);
	// 	}
	// });
	//
	// xhr.open("GET", `https://www.goodreads.com/search/?key=OdApwh4IJ7zOqXbUspaow&q=${searchQuery}`);
	// xhr.setRequestHeader("cache-control", "no-cache");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	//
	// xhr.send(data);

	// const fetch4 = fetch(`https://comicvine.gamespot.com/api/volumes/?api_key=9ef4ea3b99257e15d1e53292bc300453c14f2712&format=json&filter=name:${searchQuery}`, {
	// 	//method: 'GET', // *GET, POST, PUT, DELETE, etc.
	// 	mode: 'no-cors', // no-cors, cors, *same-origin
	// 	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	// 	//credentials: 'include', // include, same-origin, *omit
	// 	headers: {
	// 		'Content-Type': 'application/json, text/json, text/*+json, application/xml, text/xml, text/html',
	// 	 	'Content-Type': 'application/x-www-form-urlencoded',
	// 		'Access-Control-Allow-Credentials' : true,
	// 	    'Access-Control-Allow-Origin' : '*', // *, http://localhost:3000
	// 		'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With',
	// 		'Access-Control-Allow-Methods': 'GET',
	// 		'X-Content-Type-Options': 'nosniff',
	// 		'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
	// 	},
	// 	redirect: "follow", // manual, *follow, error
	// 	referrer: "no-referrer", // no-referrer, *client
	// })
	// 	.then((res) => res.json());

	// var data = null;
	//
	// var xhr = new XMLHttpRequest();
	// xhr.withCredentials = true;
	//
	// xhr.addEventListener("readystatechange", function () {
	// 	if (this.readyState === 4) {
	// 		console.log("text:",  this);
	// 	}
	// });
	//
	// xhr.open("GET", `https://comicvine.gamespot.com/api/volumes/?api_key=9ef4ea3b99257e15d1e53292bc300453c14f2712&format=json&filter=name:${searchQuery}`);
	// xhr.setRequestHeader("cache-control", "no-cache");
	// xhr.setRequestHeader("Postman-Token", "d8581b7d-e542-479f-addc-fd7320939d27");
	//
	// xhr.send(data);

	function status(response) {
		if (response.status >= 200 && response.status < 300) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(new Error(response.statusText));
		}
	}

	return Promise.all([fetch1, fetch2, fetch3, fetch4])
		.then(data => data)
		.catch(err => console.log(err));
}
