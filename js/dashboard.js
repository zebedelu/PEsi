document.getElementById("newdisp").addEventListener("click", ()=>{
    document.getElementById("AddDispositivo").style.display = "block";
})

document.getElementById("cancelPlaylist").addEventListener("click", ()=>{
    document.getElementById("AddDispositivo").style.display = "none";
    document.getElementById("AddDispositivo").querySelector("form").reset()
})

document.getElementById("createPlaylist").addEventListener("click", ()=>{
    // alguma coisa
})