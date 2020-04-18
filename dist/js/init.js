
sessionStorage.setItem("selapi","Home");
function vchange(id){
    var oldid = sessionStorage.getItem("selapi");
    if (oldid == "Home"){
        document.getElementById(oldid).getElementsByTagName('a')[0].classList.remove("active");

    } else {
        document.getElementById(oldid).getElementsByTagName('a')[0].classList.remove("active");
        document.getElementById(oldid).parentElement.parentElement.getElementsByTagName('a')[0].classList.remove("active");
    }

    if (id == "Home"){
        document.getElementById(id).getElementsByTagName('a')[0].classList.add("active");

    } else {
        document.getElementById(id).getElementsByTagName('a')[0].classList.add("active");
        document.getElementById(id).parentElement.parentElement.getElementsByTagName('a')[0].classList.add("active");
    }

    
    sessionStorage.setItem("selapi",id);
 //alert(id);
getdetails(id);
}



$.ajax({
    //data: {day: day, month: month, year: year},
    url: '/dist/json/categories.json',
    method: 'GET', // or GET
         success: function(msg) {
            var obj = msg;
            
            var i;
            for (i = 0; i < obj.length; i++) {
              //  console.log(obj[i]);
              var sidel = document.getElementById("sidel");
              var li = document.createElement("li");
              li.setAttribute("class", "nav-item has-treeview menu-closed");
              li.id = obj[i]+")";
              //<i class="nav-icon fas fa-tachometer-alt"></i>
              li.innerHTML = `
              <a href="#" class="nav-link">
              
              <p>
                Animals
                <i class="right fas fa-angle-left"></i>
              </p>
              </a>           
              `
              var txt = obj[i]
              if (txt == "Cloud Storage & File Sharing"){
                  txt = "File Sharing"
              }
              if (txt == "Documents & Productivity"){
                txt = "Productivity"
            }
              li.getElementsByTagName("p")[0].innerHTML = txt+'<i class="right fas fa-angle-left"></i>';
              var ul = document.createElement("ul");
              ul.setAttribute("class", "nav nav-treeview");
              ul.id = obj[i]
              li.appendChild(ul)
              sidel.appendChild(li);
              

            }     
            initp2();    

         }

});

function initp2(){

    $.ajax({
        //data: {day: day, month: month, year: year},
        url: '/dist/json/entries.json',
        method: 'GET', // or GET
             success: function(msg) {
                var obj = msg.entries;
                console.log(obj);
                var i;
                //console.log(obj);
                for (i = 0; i < obj.length; i++) {
                  //console.log(obj[0]);
                  var cat = obj[i].Category;
                  var ul= document.getElementById(cat);
                  var li = document.createElement("li");
                  li.setAttribute("class", "nav-item");
                  li.id = obj[i].API;
                  li.innerHTML = `
                  <a onclick="vchange(this.getElementsByTagName('p')[0].innerHTML)" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p></p>
                  </a>
                  `
                  li.getElementsByTagName("p")[0].innerHTML = obj[i].API;

                  ul.appendChild(li)
                  

    
                }
    
    
                 
    
    
    
    
    
    
    
     
             }
    
    
    });
}
