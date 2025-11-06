// welcomeMessage();

function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null){
    document.getElementById("welcome-speech").innerText = 'Hello, ' + name + '! Welcome to MY PROFILE.';
    }
}
