const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd7ec23a06fmsh3e7bf70a809778ap18b7f3jsna5e55b18f5e3',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': 'd7ec23a06fmsh3e7bf70a809778ap18b7f3jsna5e55b18f5e3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export { exerciseOptions, fetchData, youtubeOptions };