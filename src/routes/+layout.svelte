
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="/" style="font-size: 5rem; font-weight: bold;">Leterboxind</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/" style="background-image: url('caminho/para/imagem1.jpg'); background-size: cover; padding: 10px 20px; border-radius: 5px;">
            Início
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" style="background-image: url('caminho/para/imagem2.jpg'); background-size: cover; padding: 10px 20px; border-radius: 5px;">
            Sobre
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact" style="background-image: url('caminho/para/imagem3.jpg'); background-size: cover; padding: 10px 20px; border-radius: 5px;">
            Contato
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: #222;
    padding: 10px 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .logo {
    font-size: 6rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
    padding: 20px;
    display: inline-block;
  }
  .nav-links {
    display: flex;
    list-style: none;
  }
  .nav-item {
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
    padding: 20px 40px;
    margin: 0 10px;
    border-radius: 5px;
    text-decoration: none;
  }
</style>

<slot />