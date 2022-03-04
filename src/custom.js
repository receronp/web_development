var request = new XMLHttpRequest();
request.open("GET", "./src/config/test-config.json", false);
request.send(null)

var dt = new Date()
document.getElementById("current_date").innerHTML = dt.toDateString();
var configJson= JSON.parse(request.responseText);
document.getElementById("name").innerHTML = configJson.name;
