/*
 1.Login
 1.1 Validation for user login with pre-defined user info
 1.2 If auth success, Login into the admin panel
 1.3 If auth fail, display error message
 1.4 Store auth info to the local storage until user logout

*/

// predefined data
let predefinedData = {
    email: "yuki@gmail.com",
    password: "123456",
}

// 1.1 Validation for user login with pre-defined user info
function validate(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // 1.2 If auth success, Login into the admin panel
    if(email == predefinedData.email && password == predefinedData.password){
        window.location = "../Final_Project_RWD1506/dashboard.html";
    }
    else if(email == '' || password == ''){
         alert('Email and Passward field is required');
    }

    // 1.3 If auth fail, display error message
    else{
        alert('Your Email and Password are incorrect');
        window.location = "../Final_Project_RWD1506/login.html";
    }

    // 1.4 Store auth info to the local storage until user logout
    window.localStorage.setItem('email', JSON.stringify(email));
    window.localStorage.setItem('password', JSON.stringify(password));


    
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);  


}


