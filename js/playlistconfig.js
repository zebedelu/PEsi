
document.getElementById("associarPlaylist").addEventListener("click", () => {
	document.getElementById("associarPlaylistMSG").style.display = "block";
});

document.getElementById("cancelAssociate").addEventListener("click", ()=>{
	document.getElementById("associarPlaylistMSG").style.display = "none";
})