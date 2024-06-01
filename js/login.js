<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokemon Bank - Login</title>
    <!--Bootstrap css-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <!--Bootstrap JS-->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <!--Estilos Internos-->
    <link rel="stylesheet" href="./css/login.css" />
    <!--Iconos-->
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!--Cuadro para formulario de Ingreso-->
    <div class="Whole">
      <div class="login">
        <!--Formulario para Ingreso-->
        <form id="loginForm">
          <div class="logo">
            <img src="./img/Pokemon-Logo.png" alt="Logo-Pokemon" />
          </div>
          <div class="titulos">
            <h1>¡Bienvenido!</h1>
            <h2>Iniciar Sesión</h2>
          </div>
          <!--Ingreso de Usuario y Contraseña-->
          
            <div class="input-box" id="usuario-box">
              <input
                type="text"
                id="usuarioInput"
                placeholder="Usuario"
                autocomplete="off"
              />
            </div>
            <div class="input-box" id="password-box">
              <input
                type="password"
                id="passwordInput"
                placeholder="Contraseña"
                autocomplete="off"
              />
            </div>
          
          

          <p id="errorMessage" style="color: red"></p>
          <p id="errorMessageUsuario" style="color: red"></p>
          <!--Botones para ingresar y registrar-->
          <div class="btn-group">
            <button type="button" class="btn btn-inicio" id="loginButton">
              Iniciar Sesión
            </button>
            <button type="button" class="btn btn-registro" id="registerButton">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
    <!--Acciones Internas JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="./js/login.js"></script>
  </body>
</html>
