var username = document.getElementById('name');
var mot = document.getElementById('total');

function lettercount(){
    var totaleletter = username.value.length;
    mot.innerHTML = `${totaleletter}`;
}


var usernamee = document.getElementById('pass');
var mott = document.getElementById('total2');

function lettercountt(){
    var totaleletterr = usernamee.value.length;
    mott.innerHTML = `${totaleletterr}`;
}
