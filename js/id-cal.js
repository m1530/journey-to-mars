/* const valelement = document.querySelector('.num');

// let val = valelement.value;

for (const val of valelement) {
    val.addEventListener('click', function (e) {
        //const data = e.target.value;
        document.getElementById('display').value += e.target.value;
        //calculate(data);

    });
}

document.getElementById('clr').addEventListener('click', function () {
    document.getElementById('display').value = '';
});

document.getElementById('equal').addEventListener('click', function calculate(val) {
    const data = document.getElementsByClassName('num');
    for (const item of data) {
        data.addEventListener('click', function (e) {
            let x = e.target.value;
            let y = eval(x);
            document.getElementById('display').value = y;
        })
    }

}); */
//console.log(document.querySelector('.calculator-key').value);
document.querySelector('.calculator-key').addEventListener('click', function (e) {
    const val = e.target.value;
    //console.log(val);
    document.getElementById('display').value += e.target.value;
    if (val == 'ON') {
        document.getElementById('display').value = '';
    }
    /* if (val == '=') {
        equal();
    } */
});

document.getElementById('clr').addEventListener('click', function () {
    document.getElementById('display').value = '';
});


document.getElementById('equal').addEventListener('click', function () {
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y
});

// function equal() {
/*
    let val = document.querySelector('.calculator-key').addEventListener('click', function (e) {
        const vala = e.target.value;
    }); */
//     let x = document.getElementById("display").value;
//     let y = eval(x);
//     document.getElementById("display").value = y
// }