export default function Navbar()
{
    return(
       <div>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
      </div>
    </div>
  </div>
</nav>
       </div> 
    )
}