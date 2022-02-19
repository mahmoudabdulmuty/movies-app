const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: '900220665f77fdeb07e6cd5211522470',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
