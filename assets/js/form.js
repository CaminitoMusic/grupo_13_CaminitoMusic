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

document.getElementById('head-formu').innerHTML = headFormu;

let headerMenu = `
<span id="titulo-sitio">
<a href="#">Caminito<span id="titulo-music">Music</span></a>
</span>
<!-- input para el boton del menu principal-->
<input type="checkbox" id="btn-menu">
<label for="btn-menu" id="label-menu-principal">
<img id="img-menu" alt="Imagen Menu">
</label>
<nav class="menu">
<!--menu principal-->
<ul id="menu-principal">
    <li><a href="./index.html">Inicio</a></li>
    <li><a href="/conciertos.html">Conciertos</a></li>
    <li><a href="./videos.html">Videos</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
</ul>
<div class="artistas">
    <!--boton y menu artistas-->
    <input type="checkbox" id="btn-artistas">
    <label for="btn-artistas" id="label-menu-artistas">
        <span class="titulo-artistas">Artistas</span>
    </label>
    <ul id="menu-artistas">
        <li><a href="">8 AM</a></li>
        <li><a href="./Radiohead.html">Radiohead</a></li>
        <li><a href="./Metallica.html">Metallica</a></li>
        <li><a href="./RedHotChiliPeppers.html">Red Hot Chili Peppers</a></li>
        <li><a href="./TheStrokes.html">The Strokes</a></li>
        <li><a href="./FleetwoodMac.html">Fleetwood Mac</a></li>
    </ul>
</div>
</nav>`;
document.querySelector('.header').innerHTML = headerMenu;