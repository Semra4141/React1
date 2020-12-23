function Header (){
return(
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ANASAYFA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">İLETİŞİM</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">HAKKIMIZDA</a>
        </li>
      </ul>
      <span className="navbar-text">
        Ne Aradınız
      </span>
    </div>
  </div>
</nav>
</div>
)

}

export default Header