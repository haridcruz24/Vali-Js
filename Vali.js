function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        
    }
    else{
        alert("login failed");
        event.preventDefault();
    }
}