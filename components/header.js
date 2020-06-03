const Header = `   
<header class="container header">

<nav class="row">

  <section class="col-12 header_area">

    <section class="row">

      <section class="col-12 col-sm-12 col-md-12 col-lg-2 logo_area">
        <a href="http://kaboomdaily.netlify.app/" title="Home"><img src="imgs/kaboom-logo.png" class="logo"></a>
      </section>
      <nav class="col-12 col-sm-12 col-md-12 col-lg-10 menu-lateral">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">Subscribe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log In</a>
          </li>
        </ul>

        <section class="row">
          <section class="col-sm-12 col-md-12 col-lg-10">
            <h5 class="content justify-content-center titulo-secao">UMA EXPLOSÃO DE NOTICIAS DIARIAS!</h5>
          </section>
        </section>
      </nav>


    </section>
  </section>

</nav>

<nav class="row">
  <section class="col-6 col-lg-12 header-nav">
    <section class="top-nav">
      <nav class="navbar navbar-expand-lg py-0">
        <section class="container nav">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <nav class="collapse navbar-collapse menu-area">

            <ul class="nav navbar-nav ">
              <li class="nav-item active"> <a class="nav-link" href="#">Home <span
                    class="sr-only">(current)</span></a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">Musica</a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">Noticias</a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">Categorias</a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">Loja Online</a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">Sobre nós</a> </li>
            </ul>

            <form class="ml-auto">
              <section class="search">
                <input type="text pesquisa" class="form-control" maxlength="64" placeholder="Search" />
                <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
              </section>
            </form>
          </nav>
        </section>
      </nav>
    </section>
  </section>
</nav>
</header>

`;


export default Header;