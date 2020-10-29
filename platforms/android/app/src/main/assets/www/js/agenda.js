var dt = new Date();
const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]
const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
]
function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    document.getElementById("date_str").innerHTML = months[dt.getMonth()] + " " + dt.getFullYear();
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    console.log(day);
    for (i = 1; i <= endDate; i++) {
        dd = new Date(dt)
        dd.setDate(dd.getDate() + i-1)
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div onclick='cambDate(\"" + dd + "\");' class='today'>" + i + "</div>";
        else
            cells += "<div onclick='cambDate(\"" + dd + "\");'>" + i + "</div>";
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
    document.getElementById("fechaDetalle").innerHTML = days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()];
    window.localStorage.setItem("date", today);

}

function cambDate(date) {
    date=new Date(date);
    document.getElementById("fechaDetalle").innerHTML = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()];
    window.localStorage.setItem("date", date);
}

function moveDate(para) {
    if (para == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if (para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}