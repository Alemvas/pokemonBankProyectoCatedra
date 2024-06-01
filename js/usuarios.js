body {
    background-image: url(../img/fondo.jpg);
    background-size: cover;
    background-position: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.caja {
    background-color: #f6f66d;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    width: 95%;
    max-width: 600px; /* Ampliar el ancho máximo de la caja */
}

.header {
    text-align: center;
    margin-bottom: 20px;
}

.header img {
    width: 350px;
    margin-bottom: 20px;
}

.formulario {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
    font-weight: bold; /* Aplicar negrita a los títulos */
}

.mensaje {
    margin-top: 20px;
    text-align: center;
}

/* Estilos para los campos de entrada */
.formulario input[type="text"],
.formulario input[type="password"],
.formulario input[type="email"] {
    width: 80%;
    height: 40px;
    border: none;
    background: white;
    border-radius: 40px;
    border: 3px solid rgba(255, 255, 255, 0.407);
    font-size: 18px;
    padding-left: 15px;
    text-align: center;
    margin: 10px auto; /* Centrar vertical y horizontalmente */
    padding-bottom: 15px;
}

/* Estilos para los botones */
.btn-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px; /* Agregar espacio entre los botones */
}

.btn {
    flex: 1; /* Ajustar el tamaño de los botones para que ocupen el mismo ancho */
    height: 45px;
    border: none;
    background-color: #eee7e7;
    font-size: 17px;
    border-radius: 40px;
    cursor: pointer;
    font-weight: 500;
    color: black;
    margin: 0 5px; /* Agregar margen entre los botones */
}

.btn:hover {
    background-color: #94f65c; /* Cambiar a un color similar al amarillo, pero no exactamente amarillo */
    color: black;
}
