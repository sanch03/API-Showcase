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
div.innerHTML = 
  `<pre class="prettyprint" id="code">count:	integers 1-100	The number of images to be returned. Default is 1.</pre>
  <pre class="prettyprint" id="code">urls: true/false	Should the API return URLs or filenames without extensions? URLs are the default.</pre>
  <pre class="prettyprint" id="code">httpsUrls: true/false	Should URLs be HTTPS or HTTP? They're HTTPS by default now.</pre>
  <pre class="prettyprint" id="code">img id="image" src="http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"</pre>`;
var element = document.getElementById("cexample");
element.appendChild(div);
//$.getScript("/dist/js/run_prettify.js");
refreshcode();         

var outdiv = document.getElementById("output");           

outdiv.innerHTML = '<img id="image" src="https://cdn.shibe.online/shibes/1fd83c4261fd1c2325e3232912f238f1c222e0b4.jpg">'