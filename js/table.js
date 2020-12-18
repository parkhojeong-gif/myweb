//table.js
//타이틀영역
var tableTag = document.getElementById('tbl');

var trTag1 = document.createElement('tr'); //<tr></tr>
var tdTag1 = document.createElement('td'); //<td></td>
tdTag1.innerHTML = 'Name'
tdTag1.setAttribute('class', 'title')

var tdTag2 = document.createElement('td');
tdTag2.innerHTML ='Age';
tdTag2.setAttribute('class', 'title');

trTag1.append(tdTag1);
trTag1.append(tdTag2);

console.log(trTag1);
tableTag.append(trTag1);
//data영억
var trTag2 = document.createElement('tr');
var tdTag21 = document.createElement('td');

tdTag21.innerHTML='Hong'
// trTag2.setAttribute('id', 'first')
tdTag21.setAttribute('class', 'data');
var tdTag22 = document.createElement('td');
tdTag22.setAttribute('class', 'data');
tdTag22.innerHTML = '15';





trTag2.append(tdTag21);
trTag2.append(tdTag22);
console.log(trTag2);
tableTag.append(trTag2);