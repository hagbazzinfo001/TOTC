const url = 'https://fakeblog-tm-api.p.rapidapi.com/api/comments';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a20e354268msh0210a860763095ep1f5201jsn7fda6b9b7f47',
		'x-rapidapi-host': 'fakeblog-tm-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}