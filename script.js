function Run() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var nmk = response .NAMEK ;
      const max =26 ;
      const min =1 ;
      const michnaqa = Math.floor(Math.random()*(max -min)+1)+min ;
      let dataId = document.getElementById("data-id");
      let dataName = document.getElementById("data-name");
      let dataimg = document.getElementById("img");
      var idr ="" ;
      var namer = "" ;
      for (let NMK of nmk) {
          if (michnaqa == NMK.id){
              idr = NMK.id;
              namer = NMK.name;
              imgr = NMK.img;
              document.getElementById("img").src = imgr;            
              document.getElementById("data-id").innerHTML=idr;
              document.getElementById("data-name").innerHTML=namer;
              
              
          }
      }
      
    }
};
xhttp.open("GET", "NAMEK.json", true);
xhttp.send();
}


