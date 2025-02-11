<script>
    // Lista de filmes favoritos (exemplo)
    let favoritos = [
        { titulo: "Interestelar", imagem: "/images/interestelar.jpg" },
        { titulo: "A Origem", imagem: "/images/inception.jpg" },
        { titulo: "Clube da Luta", imagem: "/images/fight-club.jpg" },
        { titulo: "Parasita", imagem: "/images/parasite.jpg" }
    ];
</script>

<style>
    .container {
        text-align: center;
        padding: 20px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .filme {
        width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
    }

    .filme:hover {
        transform: scale(1.05);
    }

    .filme img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .filme p {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        font-weight: bold;
    }
</style>

<h1 class="text-center my-5">Favoritos</h1>
<p class="text-center mx-auto w-75">Veja sua lista de filmes favoritos aqui.</p>

<div class="container">
    <div class="row">
        {#each favoritos as filme}
            <div class="filme">
                <img src={filme.imagem} alt={filme.titulo} />
                <p>{filme.titulo}</p>
            </div>
        {/each}
    </div>
</div>
