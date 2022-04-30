document.addEventListener("DOMContentLoaded", function () {
  
  pTag = document.querySelector("div");
  
  newVal = document.createElement("p");
  newVal.innerHTML = 'Hello, Hello';
  
  pTag.appendChild(newVal);
});

/* Async testing :-

   UPDATE :- you can delete or
             convert this to a
             static comment so
             that you may view
             the page specs */

window.onModulesLoaded = new Promise( function( resolve, reject ) {
  
  setTimeout(function() {
    
    pTag = document.querySelector("div");
    pTag.innerHTML = '';
    
    newVal = document.createElement("p");
    newVal.innerHTML = 'Hello World';
    
    pTag.appendChild(newVal);
    
    resolve();
  }, 100)
});