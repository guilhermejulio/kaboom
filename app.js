const API_KEY = '8ba66509cca3446fa218228ac544662e';

function exibeNoticias () {
    //carrossel de noticias
    let divNoticia = document.getElementById('carrossel-de-noticias');
    let dados = JSON.parse(this.responseText);
    let noticia = dados.articles[15];
    let data = new Date (noticia.publishedAt);
    let texto = `
    <section id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <nav class="carousel-inner carrossel-de-noticias">
              <section class="carousel-item active">
              <a href="${noticia.url}"><img src="${noticia.urlToImage}" class="d-block w-100"></a>
                  <article class="carousel-caption d-none d-md-block">
                    <h5 class="carrossel-title">${noticia.title}</h5>
                    <p class="carrosel-text">${noticia.description}</p>
                  </article>
                </section> 
    `;
    for (i=16; i <= 17; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <section class="carousel-item">
        <a href="${noticia.url}"><img src="${noticia.urlToImage}" class="d-block w-100"></a>
        <article class="carousel-caption d-none d-md-block">
          <h5 class="carrossel-title">${noticia.title}</h5>
          <p class="carrosel-text">${noticia.description}</p>
        </article>
        </section> 
        
        `;
    };

    texto = texto + `
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </nav>
    </section>
    `;

    divNoticia.innerHTML = texto;
    


    //noticia destaque
    divNoticia = document.getElementById('noticia-importante1');
    texto = '';
    noticia = dados.articles[0];
    data = new Date (noticia.publishedAt);

    texto = `
    <h2 class="titulo-secao">NOTICIA DESTAQUE</h2>

            <article class="card">

              <article class="card-body" style="text-align: center;">
                <h2 class="card-title">${noticia.title}</h2>
                <p class="card-text">${noticia.description}</p>
                <a href="${noticia.url}">Leia mais...</a>
                <p class="card-text"><small class="text-muted">${data.toLocaleDateString()}</small></p>
              </article>
              <img src="${noticia.urlToImage}" class="card-img-top w-100" alt="...">
            </article>
    
    `;
    divNoticia.innerHTML = texto;

    //destaque na musica

    divNoticia = document.getElementById('promoted');
    texto = `
    <h2 class="titulo-secao">DESTAQUE</h2>
            <article class="card-group">
    
    `;
    for (i=1; i <= 3; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <article class="card">
        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
        <section class="card-body">
          <h5 class="titulo-secao">${noticia.title}</h5>
          <p class="card-text">${noticia.description}</p>
          <p><a href="${noticia.url}">Ler mais....</a></p>
          <p class="card-text"><small class="text-muted">${data.toLocaleDateString()}</small></p>
        </section>
      </article>
        `;
    };

    texto = texto + `</article>`;
    divNoticia.innerHTML = texto;
    

    //noticias gerais
    divNoticia = document.getElementById('noticias-gerais');
    texto = '';
    for (i=4; i <= 7; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <div class="col mb-4">
            <div class="card" id="card1">
                <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${noticia.title}</h5>
                    <p class="news-date">${data.toLocaleDateString()}</p>
                    <p class="card-text">${noticia.description}</p>
                    <p><a href="${noticia.url}">Ler mais....</a></p>
                </div>
            </div>
        </div>
        `;
    };
    
    divNoticia.innerHTML = texto;
  
    
}


function executaPesquisa(){
    
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=${API_KEY}`);
    xhr.send ();
}



window.onload = executaPesquisa ();