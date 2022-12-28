checkDarkMode();
  
        function enableLightMode(){
          document.body.classList.remove("dark");
          localStorage.darkMode = false;
        }
        function enableDarkMode(){
          document.body.classList.add("dark");
          localStorage.darkMode = true;
        }
        function checkDarkMode(){
          if(localStorage.darkMode){
            document.body.classList.add("dark");
          }
          else{
            document.body.classList.remove("dark");
          }
        }
        function myFunction() {
  var x = document.getElementById("abt");
  x.classList.toggle("about")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}