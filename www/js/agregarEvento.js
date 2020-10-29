startDateH = document.getElementById("ini");
endDateH = document.getElementById("fin");
var success = function (message) { alert("Success: " + JSON.stringify(message)); };
var error = function (message) { alert("Error: " + message); };

function agregar() {
    var date = window.localStorage.getItem("date");
    date = new Date(date);
    date.setHours(startDateH.value.split(":")[0]);
    date.setMinutes(startDateH.value.split(":")[1]);
    startDate = new Date(date);
    date.setHours(endDateH.value.split(":")[0]);
    date.setMinutes(endDateH.value.split(":")[1]);
    endDate = date;

    title = document.getElementById("text").value;
    notes = document.getElementById("desc").value;
    eventLocation = document.getElementById("ubi").value;
    alert(date)
    try {
        window['plugins']['calendar'].createEvent(title, eventLocation, notes, startDate, endDate, success, error);
      } catch (error) {
        alert(error);
      }
      

}