
function myFunc(){
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
let dan = 4;
document.write('<table border="1"; width: "500px"; table-layout: "fixed"; >')
for(let i = 1; i <= 10; i++){
    if(true){
        document.write('<tr>')
        document.write('<td>');
        document.write(dan+'*'+i+'=');
        document.write('</td>');
        document.write('<td>');
        document.write(dan*i);
        document.write('</td>');
        document.write('</tr>');  
    }else{
        
    }
}
document.write('</table>')
// document.write('</ul>')
//tr , td를 이용하여 구구단 테이블 만들기
}
// document.getElementById('show')