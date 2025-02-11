<script>
  import { onMount } from 'svelte';
  import { getMovies } from '../../lib/api';

  let movies = [];
  let selectedMovie = null;
  
  onMount(async () => {
    movies = await getMovies();
  });

  function showMovieDetails(movie) {
    selectedMovie = movie;
  }
</script>

<h1 class="text-center my-5">Filmes Populares</h1>

<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {#each movies as movie}
      <div class="col">
        <div class="card h-100" on:click={() => showMovieDetails(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-center">{movie.title}</h5>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

{#if selectedMovie}
  <div class="modal show" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{selectedMovie.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" on:click={() => selectedMovie = null}></button>
        </div>
        <div class="modal-body">
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} class="img-fluid rounded mb-4">
          <p>{selectedMovie.overview}</p>
        </div>
      </div>
    </div>
  </div>
{/if}