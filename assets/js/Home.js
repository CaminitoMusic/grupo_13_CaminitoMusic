/** HEAD HOME */
const headHome = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="./assets/icons/caminito.ico">    
    <title>Bienvenidos a CaminitoMusic</title>
    <link rel="stylesheet" href="./assets/css/home.css">
    <link rel="stylesheet" href="./assets/css/footer.css">`;
document.getElementById('head-home').innerHTML = headHome;

const headerHome = `
        <img id="banner" src="./assets/banner/caminito.jpg" alt="banner-CaminitoMusic">
        <span id="titulo-sitio">Caminito
            <span id="titulo-music">Music</span>
        </span>`;
document.querySelector('.header-home').innerHTML = headerHome;
