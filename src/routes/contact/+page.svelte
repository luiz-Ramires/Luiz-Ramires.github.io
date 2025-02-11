<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Filmes Populares</a>
            <div>
                <a class="nav-link d-inline text-light mx-2" href="index.html">Início</a>
                <a class="nav-link d-inline text-light mx-2" href="favorites.html">Favoritos</a>
                <a class="nav-link d-inline text-light mx-2" href="sobre.html">Sobre</a>
                <a class="nav-link d-inline text-light mx-2" href="contato.html">Contato</a>
            </div>
        </div>
    </nav>

    <!-- Seção de Contato -->
    <div class="container my-5">
        <h1 class="text-center">Contato</h1>
        <p class="text-center">Entre em contato conosco para mais informações. Estamos aqui para ajudar!</p>

        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" placeholder="Seu nome">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="seuemail@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensagem</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Escreva sua mensagem..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Rodapé -->
    <footer class="text-center bg-dark text-light py-3">
        <p>&copy; 2024 Filmes Populares. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
