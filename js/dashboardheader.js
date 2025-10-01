document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("main").insertAdjacentHTML("afterbegin",
    `
      <div class="left-painel">
        <div class="mini-profilelogo">
            <div>
                <div>
                  <p>P</p>
                </div>
                <p>UserName</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"/></svg>
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
            <div class="botao">
              <img src="" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    `)
})