<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clientes</title>
    <link
      rel="stylesheet"
      href="https://bootswatch.com/5/minty/bootstrap.min.css"
    />
  </head>

  <body>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link active" href="">Inicio</a></li>
        <li class="nav-item">
          <a class="nav-link active" href="">Conocenos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="">Pasteles</a>
        </li>
        <li class="nav-item"><a class="nav-link active" href="">Pedidos</a></li>
        <li class="nav-item"><a class="nav-link active" href="">Galeria</a></li>
      </ul>
    </div>
    <h1 class="h4" style="text-align: center; margin: 20px;">Registro de Clientes</h1>


    <div class="container p-6" style="width: auto; display: flex; justify-content: center;">
      <div class="row">
        <div class="col-md-8">
          <div class="card border-secondary mb-3" style="padding: 20px;">
            
            <div class="card-body">
              <h2 class="h4">Cliente</h2>

              <form class="form-group row" id="form">
                <label class="form-label mt-4" for="nombre">Nombre: </label>
                <input class="form-control"
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese su nombre completo"
                />

                <label class="form-label mt-4" for="nombre">Telefono: </label>
                <input class="form-control"
                  type="text"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingrese su telefono"
                />

                <label class="form-label mt-4" for="nombre">Correo: </label>
                <input class="form-control"
                  type="text"
                  name="correo"
                  id="correo"
                  placeholder="Ingrese su correo"
                />

                <button class="btn btn-outline-secondary" id="btn-login">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4" id="contenedor-clientes"></div>
    </div>
  </body>

  <script type="module" src="./index.js"></script>
</html>
