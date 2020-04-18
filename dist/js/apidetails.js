
 
function getdetails(name) {

    $.ajax({
        //data: {day: day, month: month, year: year},
        url: "https://api.publicapis.org/entries?title="+name,
        method: 'GET', // or POST
             success: function(msg) {
                var obj = msg;

                console.log(obj.entries[0]);
                $.getScript("/dist/js/"+obj.entries[0].Category+"/"+name+".js", function() {});

                document.getElementById("about").innerHTML = obj.entries[0].Description;
                document.getElementById("auth").innerHTML = obj.entries[0].Auth;
                document.getElementById("https").innerHTML = obj.entries[0].HTTPS;
                document.getElementById("cors").innerHTML = obj.entries[0].Cors;
                document.getElementById("url").href = obj.entries[0].Link;

//document.getElementById('code').innerHTML = JSON.stringify(obj, null, 4);
    
                 
     
             }
    
    
    });




}