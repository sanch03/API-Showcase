var e =  document.getElementById('tempdiv');
if (typeof(e) != 'undefined' && e != null)
{
    var el = document.getElementById("tempdiv");
    el.parentNode.removeChild(el);

  // Exists.
}
var div = document.createElement("div");
div.id = "tempdiv";
// The following is the HTML for "Usage Examples"
div.innerHTML = `<pre class="prettyprint" id="code">img id="image" src="https://aws.random.cat/meow"</pre>`;
var element = document.getElementById("cexample");
element.appendChild(div);
//$.getScript("/dist/js/run_prettify.js");
refreshcode();         

var outdiv = document.getElementById("output");           

outdiv.innerHTML = '<img id="image" src="https://purr.objects-us-east-1.dream.io/i/XET63.gif">'