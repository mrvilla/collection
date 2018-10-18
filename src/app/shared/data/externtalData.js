export function fetchApi(searchQuery) {
	// all api data
	const fetch1 = fetch(
		`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=short&r=json&apikey=932222db`
	).then(res => res.json());

	const fetch2 = fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyBLHt098HKBFXPpLooZ10GLa_e32WwrZjI`
	).then(res => res.json());

	const fetch3 = fetch(
		`https://api.discogs.com/database/search?q=${searchQuery}&token=HTGTujHTuaxPmsumyPVpdKswHUeRymcuqAoVbIei`
	).then(res => res.json());

	return Promise.all([fetch1, fetch2, fetch3])
		.then(data => data)
		.catch(e => e);
}
