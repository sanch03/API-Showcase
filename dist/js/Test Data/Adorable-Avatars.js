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
div.innerHTML = `
<label for="fname">Random Value (Email/Name/Text): </label>
  <input type="text" id="aavatarsemail" name="aavatarsemail">
  <button id="aavatarsrefresh" type="button" onclick="aavatarsrefresh()">Refresh</button>
<pre class="prettyprint" id="code">img id="image" src="https://api.adorable.io/avatars/285/email@email.png"</pre>`;
var element = document.getElementById("cexample");
element.appendChild(div);
//$.getScript("/dist/js/run_prettify.js");
refreshcode();         

var outdiv = document.getElementById("output");           

outdiv.innerHTML = '<img id="image" src="https://api.adorable.io/avatars/285/email@email.png">'



function aavatarsrefresh(){
    var email = document.getElementById("aavatarsemail").value;
    div.innerHTML = `
    <label for="fname">Random Value (Email/Name/Text): </label>
    <input type="text" id="aavatarsemail" name="aavatarsemail">
    <button id="aavatarsrefresh" type="button" onclick="aavatarsrefresh()">Refresh</button>
<pre class="prettyprint" id="code">img id="image" src="https://api.adorable.io/avatars/285/`+email+`.png"</pre>`;
var element = document.getElementById("cexample");
element.appendChild(div);
//$.getScript("/dist/js/run_prettify.js");
refreshcode();         

var outdiv = document.getElementById("output");           

outdiv.innerHTML = '<img id="image" src="https://api.adorable.io/avatars/285/'+email+'.png">';
}