import { useAuthStore } from "../../hooks"

export const Navbar = () => {

  const { startLogout, user } = useAuthStore();

  return (

    <div className="navbar navbar-dark bg-dark mb-4 px-4 text-cyan-100">

      <span>
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {/* //crea una separacion */}
        {user.name}
      </span>

      <button 
        className="btn btn-outline-danger"
        onClick={ startLogout }
        >
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>

    </div>
  )
}
