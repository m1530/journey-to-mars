/* const button = document.getElementsByClassName('button');
for (const actionButton of button) {
    actionButton.addEventListener('click', function (e) {
        const inputField = document.getElementById('inputField').value;
        const targetValue = e.target.value;
        document.getElementById('inputField').value = targetValue;


        if (e.target.value == '=') {
            let x = document.getElementById('inputField').value = targetValue;
            let y = eval(x);
            document.getElementById('inputField').value = y;
        }
        if (e.target.value == 'ON') {
            document.getElementById('inputField').value = '';
        }
    })
} */

// function dis(val) {
//     document.getElementById("inputField").value += val;
// }
// //function for evaluation
// function solve() {
//     let x = document.getElementById("inputField").value
//     let y = eval(x)
//     document.getElementById("inputField").value = y
// }
// //function for clearing the display
// function clr() {
//     document.getElementById("inputField").value = ""
// }

function dis(val) {
    console.log(document.getElementById("inputField").value += val);
}
function solve() {
    let x = document.getElementById("inputField").value;
    let y = eval(x);
    document.getElementById("inputField").value = y
}
function clr() {
    document.getElementById("inputField").value = '';
}