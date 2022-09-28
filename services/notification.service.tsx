import Swal from 'sweetalert2';

const succesAlert = (message = 'Se realizó la acción con éxito') =>
  Swal.fire({
    text: message,
    timer: 2000,
    icon: 'success',
    showConfirmButton: false,
  });

const failedAlert = (
  message = 'Ocurrió un error, no se pudo realizar la acción'
) =>
  Swal.fire({
    text: message,
    timer: 2000,
    showConfirmButton: false,
    icon: 'warning',
  });

const confirmAlert = async (message: string) => {
  return new Promise((resolve) => {
    Swal.fire({
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, seguro.',
      cancelButtonText: 'No, cancelar.',
      confirmButtonColor: '#EB4A5A',
      reverseButtons: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// const confirmAlert = (message:string, callBack:()=> void) => Swal.fire({
//     text: message,
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Si, seguro.',
//     cancelButtonText: 'No, cancelar.',
//     confirmButtonColor: '#EB4A5A',
//     reverseButtons: true,
// }).then(resp => {
//   if(resp.isConfirmed) {
//     callBack()
//   }
// })

export { succesAlert, failedAlert, confirmAlert };
