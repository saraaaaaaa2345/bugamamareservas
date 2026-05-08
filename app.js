function reservar() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fecha = document.getElementById("fecha").value;
  const personas = document.getElementById("personas").value;

  if (!nombre || !telefono || !fecha || !personas) {
    alert("⚠️ Completa todos los campos");
    return;
  }

  const mensaje =
    "🍽️ Nueva Reserva - Buga Mama%0A%0A" +
    "👤 Nombre: " + nombre + "%0A" +
    "📞 Teléfono: " + telefono + "%0A" +
    "📅 Fecha: " + fecha + "%0A" +
    "👥 Personas: " + personas;

  const numeroWhatsApp = "50234837662";

  const url = "https://wa.me/" + numeroWhatsApp + "?text=" + mensaje;

  window.open(url, "_blank");
}
