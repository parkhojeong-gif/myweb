//undefined
let something = null;
// something = 1>2;

if(something){
    console.log("참입니다.")
}else{
    console.log("거짓입니다.")
}

//object
something ={
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222',
    field:''
}
let name = something.name;
let age =something['age'];
for (field in something){
    console.log(field, something[field]);
}

let nameAry = ['Hong', 'Park', 'Kim','Hwang','Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'choi';

for(let i = 0; i < nameAry.length; i++){
    console.log('nameAry['+i+']'+nameAry[i]);
}
document.write('<ul>')
for(str of nameAry){
    document.write('<li>'+str+'</li>');
}
document.write('</ul>')

document.write('<table border="1">')
document.write('<tr><th>순번</th><th>이름</th></tr>');
for(let j = 0; j<nameAry.length; j++){
    document.write('<tr><td>'+j+'</td><td>'+nameAry[j]+'</td></tr>');
}
document.write('</table>')