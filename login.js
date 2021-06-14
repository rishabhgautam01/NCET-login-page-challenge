

document.getElementById("usname").addEventListener("mouseover", function() {
    // document.getElementById("usname").document.backgroundColor = "green";
    document.body.style.backgroundColor = "#33ccff";

});
    
document.getElementById("usname").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "white";
});




document.getElementById("pwd").addEventListener("mouseover", function() {
    
    document.body.style.backgroundColor = "#ff9999";

});
    
document.getElementById("pwd").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "white";
});


function required(id) 
   {
    var n=document.getElementById(id).value;
     if (n.length == 0)
      {  
          
         return false; 
      }  	
      return true; 
    } 


var loginButton = document.getElementById("login");

login.onclick = function(){
    console.log("hi");
     let email =   required("usname")
     let password  = required("pwd");
     
     if(email == false && password == false)
        alert("Email and password are compulsory");
     else if(email ==false)
     {
        alert( "Email  is required");  	
     }
     else if( password == false)
        {
            alert( "Password  is required");  	
        }
        
    else
        alert("Login Successfull")
    
    
};



