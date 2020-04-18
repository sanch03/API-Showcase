//alert("loaded");

var e =  document.getElementById('tempdiv');
if (typeof(e) != 'undefined' && e != null)
{
    var el = document.getElementById("tempdiv");
    el.parentNode.removeChild(el);

  // Exists.
}
var div = document.createElement("div");
div.id = "tempdiv";
div.innerHTML = `<pre class="prettyprint" id="code">some other code I havent put in yet</pre>
<pre class="prettyprint" id="code">$.ajax({
    var url = "https://api.thecatapi.com/v1/breeds" // set accordingly
    url: url,
    method: 'GET',
         success: function(msg) {
            var obj = msg;
            console.log(obj);         
         }
});</pre>








`;
var element = document.getElementById("cexample");
element.appendChild(div);
//$.getScript("/dist/js/run_prettify.js");
refreshcode();

$.ajax({
    //data: {day: day, month: month, year: year},
    url: 'https://api.thecatapi.com/v1/breeds',
    method: 'GET', // or GET
         success: function(msg) {
            var obj = msg;
 
            
            var outdiv = document.getElementById("output");
            outdiv.innerHTML = '<pre class="prettyprint" id="outpre"></pre>'
            
            outpre.innerHTML = JSON.stringify(obj, null, 4);
            outdiv.appendChild(outpre);
            refreshcode();  
           // $.getScript("/dist/js/run_prettify.js");

             
 
         }


});

