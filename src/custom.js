var xmlhttp = new XMLHttpRequest();
var url = "./src/config/site-config.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        getName(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getName(arr) {
  document.getElementById("name").innerHTML = arr.name;
}
