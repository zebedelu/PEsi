document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("body").insertAdjacentHTML("afterbegin",
    `
    <nav class="navbar2">
		<a>Sobre nós</a>
		<p>|</p>
		<a>Conhecer a ferramenta</a>
		<p>|</p>
		<a>Encarregaos</a>
		<p>|</p>
		<a>Github</a>
	</nav>
    `)
    document.querySelector("main").insertAdjacentHTML("afterbegin",
    `
      <div class="left-painel">
        <div class="mini-profile">
            <div>
                <img src="https://www.google.com/favicon.ico">
                <p id="user_name">UserName</p>
            </div>
            <div>
                <img src="https://www.google.com/favicon.ico">
            </div>
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