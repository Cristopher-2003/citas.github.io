   // Obtener elementos necesarios
   var modal = document.getElementById("myModal");
   var closeBtn = document.getElementsByClassName("close")[0];

   // Mostrar la ventana modal al cargar la página
   window.onload = function() {
     modal.classList.add("show");
   };

   // Cerrar la ventana modal al hacer clic en la "x"
   closeBtn.onclick = function() {
     modal.classList.remove("show");
   };

   // Cerrar la ventana modal al hacer clic fuera de ella
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.classList.remove("show");
     }
   };