import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div>
            <h4>Inicio de sesión</h4>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">
                        Dirección de correo electrónico
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        Nunca compartiremos su correo electrónico con nadie más.
                    </div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">
                        Contraseña
                    </label>
                    <input type="password" className="form-control" id="InputPassword" />
                    </div>
                    <div className="d-grid gap-2">
                    <Link><button type="submit" className="btn btn-primary">
                        Ingresar
                    </button></Link>
                    </div>
                </form>
            </div>
            <div className="card-body">
                <p>O crea un Usuario nuevo</p>
                <Link to="/signIn"><button type="button" className="btn btn-success">Crear Usuario</button></Link>
            </div>
        </div>
        
      
    )
  }
  
  export default Login