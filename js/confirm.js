document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Code").addEventListener("input", ()=>{
    document.getElementById("Code").value = document.getElementById("Code").value.slice(1, 7)
  })
  const url = new URL(window.location.href);
  const emailurl = url.searchParams.get("email");
  if (emailurl) {
    document.getElementById("emailtext").querySelector("strong").textContent =
      document
        .getElementById("emailtext")
        .querySelector("strong")
        .textContent.replace("emailsuperoficial@iorgute.net", emailurl);
  }
});