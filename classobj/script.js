class Heading {    
    constructor(text) { 
            this.text = text; 
            this.element = document.getElementById("heading"); 
  }     
    updateText() {      
         this.element.innerHTML = this.text; 
    } 
}   
    let heading = new Heading("Hello World"); 
    document.getElementById("change-button").addEventListener("click", function () 
{   
    heading.text = "The text has been changed!";   
    heading.updateText(); 
}); 
