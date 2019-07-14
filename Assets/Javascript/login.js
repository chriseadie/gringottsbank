function Login(){

}
Login.prototype = {
    postLogin: function(){
        document.getElementById('post-login').addEventListener('click', () => {
            var username = document.getElementById("login-username").value;
            var password = document.getElementById("login-password").value;
    
            const loginObj = {
                username:username,
                password:password
            }
            console.log(loginObj)

            fetch("/ApiBridge/Login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(loginObj)
            })
        }) 
    }
}