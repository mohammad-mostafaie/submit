function reload() {
    // Creating the XMLHttpRequest object
    let request = new XMLHttpRequest();
    request.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    // Instantiating the request object
    request.open("POST", "/submit/process.php");

    //Retrieving the form data
    let myForm = document.getElementById("formId");
    let formData = new FormData(myForm);

    // Sending the request to the server
    request.send(formData);

}
