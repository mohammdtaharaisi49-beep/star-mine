const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"),2200);
}
document.querySelectorAll("[data-copy]").forEach(button=>{
  button.addEventListener("click", async ()=>{
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast("کپی شد: " + value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      showToast(ok ? "کپی شد: " + value : "برای کپی، متن را دستی انتخاب کن.");
    }
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
