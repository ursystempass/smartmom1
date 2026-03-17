const user = localStorage.getItem("user")

if(!user){
window.location.href = "auth.html"
}
function goLogin(){
window.location.href = "sign in.html"
}

function goSignup(){
window.location.href = "sign up.html"
}