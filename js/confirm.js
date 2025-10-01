document.getElementById("Code").addEventListener("input", ()=>{
    if (document.getElementById("Code").value.length > 6) {
        document.getElementById("Code").value = document.getElementById("Code").value.slice(1);
    }
})