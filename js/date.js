//date.js

let today = new Date('2020-12-01'); // GMT:00:00:00 -> 09:00:00
// today.setMonth(0);
// console.log(today.getDay());

function setCal(yyyy, mm) {
    let today = new Date(yyyy + '-' + mm)
    today = new Date(yyyy, mm, 0);
    console.log(today.getDate());
}
setCal('2020', '02');


let yyyy= new getFullYear();
let mm = new getMonth();

function showCal(yyyy, mm) {
    let tab = document.createElement('table');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    tab.append(tr);
    let td = document.createElement('td');

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    for (let i = 0; i < days.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = days[i]
        tr.append(th);
        tab.append(tr);
        tab.setAttribute('border', '1');
        document.getElementById('show').append(tab);

        let trTag = document.createElement('tr');


        for (let i = 1; i <= setCal(yyyy, mm); i++) {
            let td = document.createElement('td');
            td.innerHTML = i;
            trTag.append(td);
            if (i % 7 == 0) {
                tab.append(trTag);
                trTag = document.createElement('tr');
            }


        }
        tab.append(trTag);
        document.getElementById('show').append(tab);

    }
}
showCal('2020','02');