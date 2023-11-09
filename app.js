// JS Assignment chapter 43 to 48

// ? Q1)

function callAlert() {

    alert("Hi How are you !!");

}

// ? Q2)

function call() {

    alert("Thanks for purchasing a phone from us !!");

}

// ? Q3)

function deleteRow(r) {

    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// ? Q4)

function changeImages(source) {
    document.getElementById("myImages").src = source;
}

function restoreImage() {
    document.getElementById("myImages").src = "pic 4.png";
}

// ? Q5)

let counterNum = 0;

function update() {
    document.getElementById("counter").innerHTML = counterNum;

}

function increase() {
    counterNum++;
    update();
}

function decrease() {
    counterNum--;
    update();
}