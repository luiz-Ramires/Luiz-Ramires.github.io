<script>
  let movies = [
    { title: "Nosferatu", image: "nosferatu.jpg", description: "A classic silent horror film." },
    { title: "The Brutalist", image: "brutalist.jpg", description: "A dramatic architectural story." },
    { title: "The Count of Monte Cristo", image: "montecristo.jpg", description: "A tale of revenge and justice." },
    { title: "Nickel Boys", image: "nickelboys.jpg", description: "A powerful historical drama." },
    { title: "Babygirl", image: "babygirl.jpg", description: "A heartfelt coming-of-age story." },
    { title: "Hard Truths", image: "hardtruths.jpg", description: "A gripping documentary." }
  ];
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #000;
    color: white;
    margin: 0;
    padding: 0;
  }
  .header {
    text-align: center;
    padding: 20px;
    background-color: #111;
    font-size: 24px;
    font-weight: bold;
  }
  .nav {
    display: flex;
    justify-content: center;
    background: #7a26aa;
    padding: 10px;
  }
  .nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
  }
  .nav a:hover {
    text-decoration: underline;
  }
  .main {
    padding: 20px;
    text-align: center;
    background-color: #111;
  }
  .gallery {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 10px;
    background-color: #7d138b;
  }
  .movie-card {
    flex: 0 0 auto;
    width: 180px;
    height: 280px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
  }
  .movie-title {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 5px;
  }
  .movie-info {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
  .movie-card:hover .movie-info {
    display: block;
  }
  .footer {
    text-align: center;
    padding: 10px;
    background-color: #111;
    font-size: 14px;
  }
</style>

<div class="header">Letterinbox</div>

<nav class="nav">
  <a href="#">Inicio</a>
  <a href="#">Filmes</a>
  <a href="#">Sobre</a>
</nav>

<div class="main">
  <h2>Bem vindo ao Letterinbox</h2>
  <p>Sua maior galeria de filmes de terror</p>
</div>

<div class="gallery">
  {#each movies as movie}
    <div class="movie-card" style="background-image: url({movie.image})">
      <div class="movie-title">{movie.title}</div>
      <div class="movie-info">{movie.description}</div>
    </div>
  {/each}
</div>

<div class="footer">Letterinbox</div>
