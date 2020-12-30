//function2.js
    // let name1 = window.prompt('숫자를 입력하세요');
    // let name2 = window.prompt('숫자를 입력하세요');
    // let name1 = document.getElementById('name').Value;

    
    // sum(name1, name2);
    
    // function sum(name1){
    //     let n1 = parseInt(name1);
    //     // let n2 = parseInt(b);
    //     console.log(n1);
    // }
    // 90:A, 80:B, 70:C, 그외:D
    // checkGrade(name1);
    // function checkGrade(a){ 
    //     let n1 = parseInt(a);  
    //     if(a>90){
    //         console.log('A');
    //     }else if(a>80){
    //         console.log('B');
    //     }else if(a>70){
    //         console.log('C');
    //     }else{
    //         console.log('D');
    //     }
    // } 
    // let numAry = [];
    // numAry[i]= parseInt(a1);
    // numAry[j] = parseInt(a2);
    // for(let i = 0; i)

    // diffSum(name1, name2); // 입력받은 두수 사이의 합: 1~5
    // function diffSum(a1, a2){
    //     let n1 = parseInt(a1);
    //     let n2 = parseInt(a2);
    //     let sum = 0;
    //     while(n1<n2) {
    //         sum += n1;
    //         console.log(sum)
    //         n1++; 
    //     }
    //     console.log(sum)
    // }

    // let friend1 = {}
    // friend1.name = 'Hong';
    // friend1.age = 20;
    // // friend1.hobby = 'reading';
    
    // let friend2 ={
    //     name : 'Hwang',
    //     age : 20,
    // }
    // let friend3 ={
    //     name : 'go',
    //     age : 10,
    // }
    
    // let friends = [friend1, friend2, friend3];
    // for (friend of friends){
    //     // console.log(friend)
    //     for(field in friend){
    //         console.log(friend[field]);
    //     }
    // }
    let friends = []; //배열
for(let i = 0; i< 3; i++){
    let name = window.prompt('이름을 입력하세요.');
    let age = window.prompt('나이를 입력하세요.')
    let friend ={}; //오브젝트
    friend.name = name;
    friend.age = age;
    friends[i] =friend;
}
document.write('<table border="1">');
for(friend of friends) {
    document.write('<tr>')
    for(field in friend){
        document.write('<td>' + friend[field] + '</td>');

    }
    document.write('</tr>')
}
document.write('</table>')

    // let friendsAry = [];
    // for(let i = 0; i < 1; i++){
    //     let name1 = window.prompt('이름을 입력하세요.');
    //     let name2 = window.prompt('나이를 입력하세요.');
    //     friendsAry[0] = parseInt(name1);
    //     friendsAry[1] = parseInt(name2);
    //     console.log(friendsAry[0,1]);
    //     // document.write('<p>'+friendsAry[i]+'</p>')
    // }
    // findMax();
    // function findMax(){
    //     // numAry[]
    //     let max = 0;
    //     for(val of numAry){
    //         if(max < val){
    //             max = val;
    //         }
    //     }
    //     document.write('<p>max val: </p>'+val)
    // }
    


    // let numAry = [];
    // for(let i = 0; i < 5; i++){
    //     let name1= window.prompt('숫자를 입력하세요.');
    //     numAry[i] = parseInt(name1);
    // }
    // console.log(numAry)


