// ECHO is on.

let dt = new Date();
let hr = dt.getHours();
let gretting = "Good";
if (hr < 12 ) {
    gretting += "Morning!";
}
else if (hr < 18 ) {
    gretting += "Afternoon!";
}
else {
    gretting += "Evening!";
}

let greetingP = document.getElementById('greting-p');
gretting.textContent = gretting;

console.log('Gretting:',dt);