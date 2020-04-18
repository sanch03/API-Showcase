//Try working on Dogs now
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

var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

// Define our query variables and values that will be used in the query request
var variables = {
    id: 15125
};





$.ajax({
    data: {query: query, variables: variables},
    url: 'https://graphql.anilist.co',
    method: 'POST', // or GET
         success: function(msg) {
            var obj = msg;
 
            
            var outdiv = document.getElementById("output");
            
            // The following is the HTML for "Output"
            outdiv.innerHTML = '<pre class="prettyprint" id="outpre"></pre>'
            
            outpre.innerHTML = JSON.stringify(obj, null, 4);
            outdiv.appendChild(outpre);
            refreshcode();  
           // $.getScript("/dist/js/run_prettify.js");

             
 
         }


});

