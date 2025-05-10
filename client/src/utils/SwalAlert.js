import Swal from 'sweetalert2'

export const showErrorDialog = (
    title = 'Error',
    message = 'Something went wrong'
) => {
    return Swal.fire({
        icon: 'error',
        title: title,
        text: message,
    })
}

export const showSuccessDialog = (
    title = 'Success',
    message = 'Operation successful'
) => {
    Swal.fire({
        icon: 'success',
        title: title,
        text: message,
    })
}
