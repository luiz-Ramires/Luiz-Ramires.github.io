export async function getMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=pt-BR`);
    const data = await response.json();
    return data.results;
}
