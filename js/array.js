//array.js
let friend1 = {
    name: '송다희',
    age: 20,
    hobby: '코딩',
    grade: ' a'
}
let friend2 = {
    name: '송다희2',
    age: 21,
    hobby: '코딩2',
    grade: ' a'
}

let friend3 = {
    name: '송다희3',
    age: 22,
    hobby: '코딩3',
    grade: ' a'
}
let friends = [friend1, friend2, friend3]
document.write('<table border="1" ><tr><th>이름</th><th>나이</th><th>취미</th><th>성적</th></tr><tr>')
    for(field in friend1){
        document.write('<td>'+friend1[field]+'</td>')   
    }
    document.write('</tr><tr>')
    for(field in friend2){
        document.write('<td>'+friend2[field]+'</td>')   
    }
    document.write('</tr><tr>')
    for(field in friend3){
        document.write('<td>'+friend3[field]+'</td>')   
    }
    document.write('</tr></table>')




let numbers = [3,4,8,9,12,83,22];
let sum = 0;
for(num of numbers){
    if(sum < num){
       sum = num;
   }

}

console.log("가장 큰 수"+ sum)