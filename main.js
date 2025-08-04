const total = document.getElementById("displayTotal");

//Event Listeners for all buttons
const addButton = document.getElementById("addBtn").addEventListener('click', () => {
    console.log("Add button clicked");
});
const minusButton = document.getElementById("minusBtn").addEventListener('click', () => {
    console.log("Minus button clicked");
});
const divideButton = document.getElementById("divideBtn").addEventListener('click', () => {
    console.log("Divide button clicked");
});
const multButton = document.getElementById("multBtn").addEventListener('click', () => {
    console.log("Multiply button clicked");
});
const totalButton = document.getElementById("total").addEventListener('click', () => {
    console.log("Total button clicked");
});
const clearButton = document.getElementById("clear").addEventListener('click', () => {
    console.log("Clear button clicked");
});
const zeroButton = document.getElementById("0").addEventListener('click', () => {
    total.append("0");
});
const oneButton = document.getElementById("1").addEventListener('click', () => {
    total.append("1");
});
const twoButton = document.getElementById("2").addEventListener('click', () => {
    total.append("2");
});
const threeButton = document.getElementById("3").addEventListener('click', () => {
    total.append("3");
});
const fourButton = document.getElementById("4").addEventListener('click', () => {
    total.append("4");
});
const fiveButton = document.getElementById("5").addEventListener('click', () => {
    total.append("5");
});
const sixButton = document.getElementById("6").addEventListener('click', () => {
   total.append("6") ;
});
const sevenButton = document.getElementById("7").addEventListener('click', () => {
    total.append("7");
});
const eightButton = document.getElementById("8").addEventListener('click', () => {
    total.append("8");
});
const nineButton = document.getElementById("9").addEventListener('click', () => {
    total.append("9");
});

