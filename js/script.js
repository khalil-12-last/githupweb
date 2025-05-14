document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const color = document.getElementById("color").value;
  
    if (!name || !email || !phone || !color) {
      alert("Semua field wajib diisi.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email tidak valid.");
      return;
    }
  
    // Tampilkan modal
    document.getElementById("modalThanks").style.display = "flex";
  
    // Reset form
    document.getElementById("orderForm").reset();
  });
  
  // Fungsi untuk menutup modal
  function closeModal() {
    document.getElementById("modalThanks").style.display = "none";
  }
  