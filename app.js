<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reservas - Buga Mama</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 500px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
    }
    input, button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      background: #25D366;
      color: white;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background: #1ebe5d;
    }
  </style>
</head>
<body>

<div class="container">
  <h2>🍽️ Reservas Buga Mama</h2>

  <input type="text" id="nombre" placeholder="Nombre completo">
  <input type="tel" id="telefono" placeholder="Teléfono">
  <input type="date" id="fecha">
  <input type="number" id="personas" placeholder="Cantidad de personas">

  <button onclick="reservar()">Reservar por WhatsApp</button>
</div>

<script>
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
    "🍽️ Nueva Reserva - Buga Mama\n\n" +
    "👤 Nombre: " + nombre + "\n" +
    "📞 Teléfono: " + telefono + "\n" +
    "📅 Fecha: " + fecha + "\n" +
    "👥 Personas: " + personas;

  const numeroWhatsApp = "50234837662";

  const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}
</script>

</body>
</html>
