// display a message to the user
function getMessage() {
    let userMessage = document.getElementById("message").value;
    Swal.fire(
        'button clicked ',
        userMessage,
        'success'
    );


    console.log(userMessage);
}