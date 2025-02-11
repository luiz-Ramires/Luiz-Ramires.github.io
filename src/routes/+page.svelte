<script>
  let filmes = [
      { titulo: "Filme 1", imagem: "https://via.placeholder.com/200" },
      { titulo: "Filme 2", imagem: "https://via.placeholder.com/200" },
      { titulo: "Filme 3", imagem: "https://via.placeholder.com/200" }
  ];
</script>

<style>
  header {
      background-color: #333;
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
  }
  .container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      border-radius: 10px;
      text-align: center;
  }
  .movie-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
  }
  .movie {
      background: #ddd;
      padding: 15px;
      border-radius: 5px;
  }
  .movie img {
      width: 100%;
      border-radius: 5px;
  }
  .movie h3 {
      margin-top: 10px;
  }
</style>

<div class="container">
  <h2>Confira os filmes mais populares!</h2>
  <div class="movie-list">
      {#each filmes as filme}
          <div class="movie">
              <img src={filme.imagem} alt={filme.titulo} />
              <h3>{filme.titulo}</h3>
          </div>
      {/each}
  </div>
</div>
