
function whoisLookup() {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText)
      if (this.status === 200) {
        var arr = JSON.parse(this.responseText);
        if (arr.expires !== null) {
          document.getElementById("expirationOutput").innerHTML = arr.expires;
        } else {
          document.getElementById("expirationOutput").innerHTML = "URL inválido";
        }
      } else {
        var error = JSON.parse(this.responseText);
        document.getElementById("expirationOutput").innerHTML = error.message;
      }
    }
  });

  xhr.open("GET", "https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=" + document.getElementById("domainInput").value.toLowerCase() + "&format=json");
  xhr.setRequestHeader("x-rapidapi-host", "zozor54-whois-lookup-v1.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "d4268b2215msh0191903520cd524p16bb81jsnbe76a83d5720");

  xhr.send(data);
}
