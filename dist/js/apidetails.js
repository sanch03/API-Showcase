function getdetails(name) {
    var e = new XMLHttpRequest;
    e.onreadystatechange = function() {
        if (4 == e.readyState && 200 == e.status) {
            var t = e.responseText;
        console.log("hi");

            console.log(t);
var obj = JSON.parse(t);
console.log(obj.entries[0]);
//var val = JSON.parse(obj[0]);
//console.log(val);
document.getElementById("about").innerHTML = obj.entries[0].Description;
document.getElementById("auth").innerHTML = obj.entries[0].Auth;
document.getElementById("https").innerHTML = obj.entries[0].HTTPS;
document.getElementById("cors").innerHTML = obj.entries[0].Cors;
document.getElementById("url").href = obj.entries[0].Link;
        }   
    }
    ,
    e.open("GET", "https://api.publicapis.org/entries?title="+name, !0),
    e.send(null)

}