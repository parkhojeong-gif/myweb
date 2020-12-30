//function3.js
let friends = [];
let i = 0;
function input_friend(){
    let namef  = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;
    
    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;  
    friends[i++] = friend;
    console.clear();
    document.createElement('table')
    // document.getElementById('friends').value
    document.createElement('tr')
    document.createElement('td').innerHTML = friend.name
    document.createElement('td').innerHTML = friend.age
    document.createElement('td').innerHTML = friend.hobby
    
    
 
    for(friend of friends){
        for(field in friend){
            console.log(friend[field]);
        }
    }
}
    
    
    // console.log(namef.value, age.value, hobbyf.value);
    // document.getElementById("result").value =namef.value+',' +age.value+','+ hobbyf.value;
