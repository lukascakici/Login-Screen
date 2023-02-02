var emailElem = document.getElementById("email")
var passwordElem = document.getElementById("password")


var users= [
    {email:"utkukaya.tr@gmail.com", password:"utku123"},
    {email:"cakicilukas@gmail.com", password:"lukas123"}
]


function login(){
    var emailValue = emailElem.value
    var passwordValue = passwordElem.value
    for(i=0; i<users.length; i++) {
        
        
        if (emailValue ==users[i].email && passwordValue ==users[i].password) {
            
            emailElem.style.backgroundColor = "green"
            passwordElem.style.backgroundColor = "green"
            alert("succesfully logged in")
            return "sdgdf";
        }
    
    }
    
    emailElem.style.backgroundColor = "red"
    passwordElem.style.backgroundColor = "red"

    return;
            
}






