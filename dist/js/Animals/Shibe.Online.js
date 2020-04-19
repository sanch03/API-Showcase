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
div.innerHTML = `<pre class="prettyprint" id="code">img id="image" src="http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"</pre>`;
var element = document.getElementById("cexample");
element.appendChild(div);
// The following is the HTML for "Instructions"
div.innerHTML = `<pre class="prettyprint" id="code">img id="image" src="http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"</pre>`;
var element = document.getElementById("cinstructions");
element.appendChild(div);
//$.getScript("/dist/js/run_prettify.js");
refreshcode();         

var outdiv = document.getElementById("output");           

outdiv.innerHTML = '<img id="image" src="https://cdn.shibe.online/shibes/1fd83c4261fd1c2325e3232912f238f1c222e0b4.jpg">'