let resesi = setInterval(resession, 300000);

function resession(){
    curtime = new Date()
    fetch("/resession.php")
    .then(x => x.text())
    .then(y => console.log(curtime," : ",y));
}
