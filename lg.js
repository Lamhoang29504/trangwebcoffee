const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const  username = form.username.value
    const password = form.password.value
    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "dangxuat.html"
    }else{
        alert("sai thông tin đăng nhập")
    }
})

function authentication(username,password){
    if(username === "admin" && password === "123456"){
        return true
    }else{
        return false
    }
}