// string.js
let str = 'Please locate where "locate" occurs!';
let strLeng = str.length

console.log(strLeng);

//indexOf, lastIndexOf, search

strLeng = str.indexOf('locate', 13);
console.log(strLeng);

console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));

// slice, substring, substr
let fruit = 'Apple, Banana, kiwi';
let result = fruit.slice(7, 12);
console.log(result);

let from = fruit. indexOf('Banana');
result = fruit.substring(from, from+6);
console.log(result);

result = fruit.substr(from, 6);
console.log(result);

// replace 
let newFruit = fruit.replace('Banana', 'Orange');

console.log(newFruit);

//toUpperCase, toLowerCase, concat, trim, padStar, padEnd

console.log('    hello    '.trim().toUpperCase());
console.log('5'.padStart(4, '0'));

let uri = 'http://www.naver.net';
console.log(uri.replace('net', 'com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')),'.com'));

let fruits = fruit.split(','); // Apple, Banana, Kiwi
for(f of fruits){
    console.log(f.trim());
}

// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890

// 2000년 이전, 이후 구분 -> 1,3이면 남자
// 2000년 이전, 이후 구분 -> 2,4이면 남자

function getGender(num){
    let fNum = num.replace('-', '').substr(6,1);
    let fYear = num.substr(0,2);
    if(fNum == '1'){
        return '남자';
    }else if(fNum == '2'){
        return '여자';
    }else if(parseInt(fYear) < 20 && fNum == '3'){
       return '남자'; 
    }else if(parseInt(fYear) < 20 && fNum == '4'){
        return '여자';
    }
     
}

let numbers ='990102-2345678';
numbers +=' 990101-1234567';
numbers +=' 000201-3456789';
numbers +=' 000202-4567890';
numbers +=' 0003145678900';


let numAry = numbers.split(' ');
for(num of numAry){
    console.log(num);
    console.log(result = getGender(num));
    result = getGender(num)
    console.log('결과: '+ result);
}

// result = getGender('000202-4567890');