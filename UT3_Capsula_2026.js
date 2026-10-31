
"use strict";

/*
 * CÁPSULA 2026
 * UT3 - Desarrollo Web en Entorno Cliente
 *
 * Actividad 3: Manipulación del DOM y evento onclick.
 * Actividad 4: Interacción mediante prompt() y alert().
 */

// 1. ELEMENTOS DEL DOM

const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("ejecutar");
const campoMensaje = document.getElementById("mensajeUsuario");
const experimento = document.getElementById("experimento");
const mision = document.getElementById("mision");
const aceptar = document.getElementById("aceptar");
const rechazar = document.getElementById("rechazar");
const resultado = document.getElementById("resultado");

// 2. ACTIVIDAD 3 — EVENTO Y MANIPULACIÓN DEL DOM

boton.onclick = function () {

    // Comprobamos que existe un mensaje para el futuro.
    const textoUsuario = campoMensaje.value.trim();

    if (textoUsuario === "") {
        mensaje.textContent =
            "Escribe un mensaje antes de enviar la cápsula.";
        return;
    }

    // Detectamos una transmisión inesperada.
    mensaje.textContent =
        "⚠ ANOMALÍA DETECTADA.\n\n" +
        "Se ha recibido una transmisión de origen desconocido.\n" +
        "La fecha de emisión no puede verificarse.\n" +
        "¿Podría proceder del futuro? No podemos confirmarlo.\n" +
        "Se recomienda precaución.\n" +
        "Se requiere identificar al destinatario para continuar.";

    // 3. ACTIVIDAD 4 — PROMPT Y ALERT

    const nombre = prompt(
        "⚠ ALERTA — CÁPSULA 2026 ⚠\n\n" +
        "TRANSMISIÓN DE ORIGEN DESCONOCIDO\n\n" +
        "Se ha recibido una respuesta inesperada.\n" +
        "No es posible identificar su procedencia.\n\n" +
        "IDENTIFICACIÓN REQUERIDA\n" +
        "¿Cómo te llamas?"
    );

    // Validamos la identificación.
    if (nombre === null || nombre.trim() === "") {
        alert("Identificación cancelada. Transmisión interrumpida.");

        mensaje.textContent =
            "TRANSMISIÓN INTERRUMPIDA. Identificación no completada.";

        return;
    }

    const nombreValidado = nombre.trim();

    // Confirmación personalizada de la identidad.
    alert(
        "IDENTIDAD CONFIRMADA\n\n" +
        "Hola, " + nombreValidado + ".\n" +
        "Eres la persona elegida para una misión misteriosa.\n\n" +
        "PROTOCOLO 01 ACTIVADO."
    );

    // Mostramos la transmisión de la primera misión.
    mensaje.textContent =
        "TRANSMISIÓN RECIBIDA.\n" +
        "Destinatario: " + nombreValidado + ".\n" +
        "Origen: desconocido.";

    // Ocultamos el formulario para disponer de más espacio.
    experimento.hidden = true;

    // Revelamos la misión.
    mision.hidden = false;
};

// 4. DECISIÓN FINAL — PROTOCOLO 01

aceptar.onclick = function () {
    resultado.textContent =
        "Gracias por aceptar.\n" +
        "Vas a conectar con la esencia universal.";

    // Bloqueamos nuevas respuestas después de decidir.
    aceptar.disabled = true;
    rechazar.disabled = true;
};

rechazar.onclick = function () {
    resultado.textContent =
        "Al tiempo, la humanidad conocerá la esencia universal.";

    aceptar.disabled = true;
    rechazar.disabled = true;
};
