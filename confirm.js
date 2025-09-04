document.addEventListener("DOMContentLoaded",()=>{
    const url = new URL(window.location.href)
    const emailurl = url.searchParams.get("email")
    document.getElementById("emailtext").textContent = document.getElementById("emailtext").textContent.replace("emailsuperoficial@iorgute.net",emailurl)
})