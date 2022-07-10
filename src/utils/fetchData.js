const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f785069e79msh30a64ed9d6f5737p1a19dajsn9013dcc0b1ab',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

const youtubeOptions = {
	method: 'GET',
	url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
	headers: {
		'X-RapidAPI-Key': 'f785069e79msh30a64ed9d6f5737p1a19dajsn9013dcc0b1ab',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	},
};

const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

export { exerciseOptions, fetchData, youtubeOptions };