const copy_form_status = {
    ready: {
        class: 'status-ready',
        message: ''
    },
    sending: {
        class: 'status-sending',
        message: 'Sending ...',
    },
    success: {
        class: 'status-success',
        message: 'Thank you for your interest! Your request was sent successfully.'
    },
    error: {
        class: 'status-error',
        message: 'Oops! There was a problem submitting your form.'
    }
}

function updateFormStatus(form, value) {
    form.classList.remove(...form.classList);
    form.classList.add(value.toString());
}

function handleFormspreeSubmission(event) {

    event.preventDefault();

    let status_el = event.target.parentNode.querySelectorAll(".status-message")[0];
    let data = new FormData(event.target);

    fetch(event.target.action, {
        method: event.target.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {


            updateFormStatus(event.target, copy_form_status.success.class);
            status_el.innerHTML = copy_form_status.success.message;

            event.target.reset()

        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {

                    status_el.innerHTML = data["errors"].map(error => error["message"]).join(", ")

                } else {

                    updateFormStatus(event.target, copy_form_status.error.class);
                    status_el.innerHTML = getInTouchStatus.error.message;

                }
            })
        }
    }).catch(error => {

        updateFormStatus(event.target, copy_form_status.error.class);
        status_el.innerHTML = copy_form_status.error.message;

    });
}

window.addEventListener("load", (event) => {
    
    let formspree_forms = document.querySelectorAll('form[action*="formspree"]');

    formspree_forms.forEach((form) => {
        updateFormStatus(form, copy_form_status.ready.class);
        form.addEventListener("submit", handleFormspreeSubmission);

        
        form.parentNode.querySelectorAll('label[for*="modal-toggle"], .status-reset').forEach((el) => {
            el.addEventListener("click", (e) => {
                updateFormStatus(form, copy_form_status.ready.class);
            });
        });

    });

});