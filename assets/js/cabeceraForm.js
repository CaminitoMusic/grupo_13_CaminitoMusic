let headFormu = `
	<!-- Enlazar los estilos de Bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="../assets/icons/caminito.ico">
    <link rel="stylesheet" href="../assets/css/menu.css">
    <link rel="stylesheet" href="../assets/css/contacto.css">
    <link rel="stylesheet" href="../assets/css/footer.css">
    <title>CaminitoMusic</title>`;

document.getElementById('head-contacto').innerHTML = headFormu;

const headerMenu = `
    <span id="titulo-sitio">
        <a href="../index.html">Caminito<span id="titulo-music">Music</span></a>
    </span>
    <!-- input para el boton del menu principal-->
    <input type="checkbox" id="btn-menu">
    <label for="btn-menu" id="label-menu-principal">
        <img id="img-menu" alt="Imagen Menu">
    </label>
    <nav class="menu">
        <!--menu principal-->
        <ul id="menu-principal">
            <li><a href="./caminito.html">Inicio</a></li>
            <li><a href="./videos.html">Videos</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
        </ul>
    </nav>
    <div class="boton-artistas">
        <span id="btnArtistas">Artistas</span>
    </div>
    <!-- lista generada auto con datos de la API -->
    <div class="lista-artistas" id="menu-artistas"></div>
   `;
document.querySelector('.header').innerHTML = headerMenu;