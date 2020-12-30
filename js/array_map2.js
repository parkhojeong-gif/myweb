//array_map2.js
//reduce
let students = [];

for(let i = 1 ; i<=5; i++){
    let std = {};
    std.sno = i;
    std.sname = "Hong"+i;
    std.sgen = i % 2 == 0? 'M':'F' ;
    std.score = 80+ i ;
    students.push(std);
}


let result = students.some(function(a,b,c){
    return a.score > 81;
});
console.log(result);

result = students.map(function(a){ //몇번째 위치에 있는지 알려줌
    return a.sname;
}).indexOf('Hong2');
console.log(result);














// console.log(students);
// let result = students.map(function(a,b,c){
//     console.log(a,b,c);
//     return a.score ;
// }).reduce(function(a,b,c,d){
//     return a = (a + b) / 2;
// });

// console.log('result: ', result);