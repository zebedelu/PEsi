document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("body").insertAdjacentHTML("afterbegin",
      `
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-HK5fgLBL+x+fKj3F8fFvS1QkQOQWwNn0xSTy5Av1k6R+eCzE7a7uOB3Mo6wyiQpVYqovsnDzt8cF2VZ9PpJ0Gw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />`
    )
    document.querySelector("main").insertAdjacentHTML("afterbegin",
    `
      <div class="left-painel">
        <div class="mini-profilelogo">
            <div>
                <img src="https://www.google.com/favicon.ico">
                <p id="user_name">UserName</p>
            </div>
            <i class="fa-solid fa-gear"></i>
        </div>
        <div class="botoes">
          <div class="cima">
            <div class="botao">
              <a href="dashboard.html">Conexões</a>
            </div>
            <div class="botao">
              <a href="playlists.html">Playlists</a>
            </div>
          </div>
          <div class="baixo">
            <div class="botao">
              <img src="" />
              <p>Documentação</p>
            </div>
            <div class="botao">
              <img src="" />
              <p>Sobre a ferramenta</p>
            </div>
          </div>
        </div>
      </div>
    `)
})