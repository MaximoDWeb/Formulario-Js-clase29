const formulario = document.querySelector('#formulario');
const campo_name = document.querySelector('#user-name');
const campo_email = document.querySelector('#user-email');
const alert_name = document.querySelector('#alert-name');
const alert_email = document.querySelector('#alert-email');
const alert_success = document.querySelector('#alert-success');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert_success.classList.add('d-none');

    const errores = []

    if (!regUserName.test(campo_name.value) || !campo_name.value.trim()) {
        errores.push({
            tipo: alert_name,
            msg: 'te has equivocado, solo letras.',
        });

    }

    if (!regUserEmail.test(campo_email.value) || !campo_email.value.trim()) {
        errores.push({
            tipo: alert_email,
            msg: 'Ingrese un mail correctamente.',
        });


    }

    if (errores.length !== 0) {
        return;
    }

    mostrarFormEnviado();

});

const mostrarFormEnviado = () => {
    alert_success.classList.remove('d-none');
    alert_success.textContent = 'form enviado con exito';
};