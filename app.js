document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    // Convertir altura de cm a m
    const alturaMetros = altura / 100;

    // Calcular el IMC
    const imc = peso / Math.pow(alturaMetros, 2);

    let mensaje = '';
    let tipoRutina = '';

    if (imc < 18.5) { // Bajo peso
        mensaje = 'Usted está debajo del peso saludable. Su Masa coropral es ' + imc.toFixed(2);
        tipoRutina = 'ganar';
    } else if (imc >= 18.5 && imc <= 24.9) { // Peso normal
        mensaje = 'Su peso está dentro del rango saludable. Su Masa coropral es ' + imc.toFixed(2);
        tipoRutina = ''; // No especificamos una rutina para peso normal
    } else if (imc >= 25 && imc <= 29.9) { // Sobrepeso
        mensaje = 'Usted tiene sobrepeso. Su Masa coropral es ' + imc.toFixed(2);
        tipoRutina = 'perder';
    } else { // Obesidad
        mensaje = 'Usted tiene obesidad. Su Masa coropral es ' + imc.toFixed(2);
        tipoRutina = 'perder';
    }

    // Muestra el mensaje en el modal
    document.getElementById('mensaje').innerText = mensaje;
    document.getElementById('modal').style.display = "block";

    // Función para cerrar el modal
    document.querySelector('.close').onclick = function() {
        document.getElementById('modal').style.display = "none";
    }

    // Si el usuario no seleccionó ver una rutina, cierra el modal directamente
    if (!confirm(`¿Desea ver una rutina para ${tipoRutina? tipoRutina : 'mantener'} peso?`)) {
        document.getElementById('modal').style.display = "none";
    }
});
