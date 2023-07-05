
export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 text-cyan-100">

      <span>
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {/* //crea una separacion */}
        Julian
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>

    </div>
  )
}
