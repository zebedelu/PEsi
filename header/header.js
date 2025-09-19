function MensagemParaUser() {
  document.getElementById("usermessage").style.animation = "aparecer 5s ease 1";
  setTimeout(()=>{
    document.getElementById("usermessage").style.animation = "";
  },5000)
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("nav").insertAdjacentHTML("afterbegin",
    `
      <div class="menu onlyresponsive">
        <img src="header/hamburguer.svg" />
        <div class="menubar">
          <div class="superior">
            <img src="images/favicon.ico" />
            <h1 class="projecttitle"></h1>
          </div>
          <div class="inferior">
            <div>
              <img src="images/favicon.ico" />
              <a href="">Home</a>
            </div>
            <div>
              <img src="images/favicon.ico" />
              <a href="">Sobre</a>
            </div>
            <div>
              <img src="images/favicon.ico" />
              <a href="">Página 1</a>
            </div>
            <div>
              <img src="images/favicon.ico" />
              <a href="">Página 2</a>
            </div>
          </div>
        </div>
      </div>
    `)
})