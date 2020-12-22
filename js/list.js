
function myFunc(){
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
let dan = 4;
// document.write('<ul>')
for(let i = 1; i <= 10; i++){
    if(i%2==1){
        document.write('<tr><td>< class="even">'+ dan+'*'+i+'=<td>'+'<b>'+(dan* i)+'</b>'+'</tr>');
    }else{
        document.write('<li class="odd">'+ dan+'*'+i+'='+'<b>'+(dan* i)+'</b>'+'</li>');
}
}
// document.write('</ul>')
//tr , td를 이용하여 구구단 테이블 만들기
}
// document.getElementById('show')