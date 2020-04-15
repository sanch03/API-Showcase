function getdetails(name) {
    $.ajax({
        //data: {day: day, month: month, year: year},
        url: 'https://api.publicapis.org/entries?title='+name,
        method: 'POST', // or GET
             success: function(msg) {
                var t = msg;
               console.log(t);
                 

                 
             }
    });    





}