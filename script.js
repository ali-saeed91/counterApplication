const counter = document.getElementById("counter");
// console.log(counter.innerHTML);
const incrementbtn = document.getElementById("increase");
const decrementbtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");

let count =0;
incrementbtn.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;

});

decrementbtn.addEventListener("click", () => {
    if(count>0){
    count--;
    counter.innerHTML = count;
    }
});

resetbtn.addEventListener("click", () => {
    count =0;
    counter.innerHTML = count;

});