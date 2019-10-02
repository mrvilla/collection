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

	return Promise.all([fetch1, fetch2, fetch3, fetch4])
		.then(data => data)
		.catch(err => console.log(err));
}
