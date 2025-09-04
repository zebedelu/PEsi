document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("nav").insertAdjacentHTML("afterbegin",
    `
      <div class="menu onlyresponsive">
        <img src="header/hamburguer.svg" />
        <div class="menubar">
          <div class="superior">
            <img src="favicon.ico" />
            <h1 class="projecttitle"></h1>
          </div>
          <div class="inferior">
            <div>
              <img src="favicon.ico" />
              <a href="">Home</a>
            </div>
            <div>
              <img src="favicon.ico" />
              <a href="">Sobre</a>
            </div>
            <div>
              <img src="favicon.ico" />
              <a href="">texto</a>
            </div>
            <div>
              <img src="favicon.ico" />
              <a href="">texto</a>
            </div>
          </div>
        </div>
      </div>
    `)
})