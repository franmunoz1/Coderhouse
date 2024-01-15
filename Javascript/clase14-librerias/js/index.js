const button1 = document.getElementById("button1")
button1.addEventListener("click", () => {
    Swal.fire({
        title: "Esta seguro que quiere eliminar este producto del carrito?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `No eliminar`
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
})

const button2 = document.getElementById("button2")
button2.addEventListener("click", () => {
    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    });
})


const button3 = document.getElementById("button3")
button3.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
})


const btnSession = document.getElementById("btnSession")

const usuarioAutorizado = "coder2023"
const passwordAutorizado = "hola1234"

btnSession.addEventListener("click", () => {
    Swal.fire({
        title: "Inicio de Sesion",
        html: `
        <input type="text" id="usuario" class="swal2-input" placeholder="Usuario">
        <input type="text" id="password" class="swal2-input" placeholder="Password">
        `,
        confirmButtonText: "Ingresar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            const usuario = document.getElementById("usuario").value
            const password = document.getElementById("password").value

            if (usuario === usuarioAutorizado && password === passwordAutorizado) {
                window.location.href = "exito.html"
            } else {
                Swal.fire({
                    title: "Error"
                })
            }
        }
    })
})


const button4 = document.getElementById("button4")
button4.addEventListener("click", () => {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
})

var DateTime = luxon.DateTime;

console.log(DateTime)
