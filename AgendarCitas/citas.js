function guardarReserva() {
    // Obtener el valor del campo de fecha y hora
    var fechaHora = document.getElementById("fecha-hora").value;

    // Verificar si el campo está vacío
    if (fechaHora === "") {
      alert("No hay datos ingresados");
      return false;
    }

    // Obtener el día y la hora separados
    var dia = fechaHora.split("T")[0];
    var hora = fechaHora.split("T")[1];

    // Mostrar el día y la hora establecida en etiquetas
    document.getElementById("dia-establecido").textContent = "Día Establecido: " + dia;
    document.getElementById("hora-establecida").textContent = "Hora Establecida: " + hora;

    // Devolver false para evitar que el formulario se envíe y la página se recargue
    return false;
  }



