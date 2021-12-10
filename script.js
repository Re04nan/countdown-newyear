var year = new Date().getFullYear();

var days = new Date().getDay();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var milliseconds = new Date().getMilliseconds();

var targetDate = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

setInterval(() => {
    var currentDate = new Date().getTime();
    var millisecondsMissing = (targetDate - currentDate) / 1000;

    /* Um dia (24 horas) equivale a 86.400.000 milissegundos.*/
    days = parseInt(millisecondsMissing / 86400);
    millisecondsMissing = millisecondsMissing % 86400;
    /* Uma hora (1 h) equivale a 3.600.000 milissegundos.*/
    hours = parseInt(millisecondsMissing / 3600);
    millisecondsMissing = millisecondsMissing % 3600;
    /* Um minuto (1 min) equivale a 60.000 milissegundos.*/
    minutes = parseInt(millisecondsMissing / 60);
    milliseconds = parseInt(millisecondsMissing % 60);

    if (days < 10) days = "0" + days;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (milliseconds < 10) milliseconds = "0" + milliseconds;

    document.getElementById("ano").innerHTML = year;
    document.getElementById("contador").innerHTML = `Faltam ${days} dias - ${hours}:${minutes}:${milliseconds}`;

}, 1000);

/*Força o script a recarregar*/
window.onload = function () {
    document.getElementById("button").addEventListener("click", () => alert("Mensagem enviada!"));
}

