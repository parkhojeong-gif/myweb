var name = document
.getElementById('show')
.innerHTML;
console.log(name);
document
.getElementById('show')
.innerHTML = "World"

var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; //<div>Nice</div>

document
.getElementById('show')
.append(divTag);
console.log("-------------------------------------")
var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
li_1.innerHTML = "Apple";
li_2.innerHTML = "Orange";

document
.getElementById('fruit')
.append(li_1);
document
.getElementById('fruit')
.append(li_2);
// var name2 = document     .getElementById('fruit')     .innerHTML = "Apple";
// var ulTag = document.createElement("ul").innerHTML="Orange";
// console.log(name2); document.getElementById('fruit')
// var grade = 3;

let sum = 0;
for(var i = 0; i <= 100; i++){
sum += i;
}
console.log(sum);