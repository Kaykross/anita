document.addEventListener("DOMContentLoaded",function(e){
     const firstname = document.querySelector("[name='firstname']");
     const lastname = document.querySelector("[name='lastname']");
     const email = document.querySelector("[name='email']");
     const password = document.querySelector("[name='password']");
     const confirm_password = document.querySelector("[name='confirm password']");
     const inputError = document.querySelector(".input-error");
     const btnSend = document.querySelector(".btn-send");

/* ==============================================
      Send Email Message
 =============================================== */
 
     function closeInputError() {
       inputError.onclick=e=>{
         if(e.target.classList.contains("btn-close-error")){
           inputError.innerHTML = '';
           inputError.classList.remove(...['error','success']);
         }
       }
     }
     closeInputError();
 
btnSend.onclick = async(e)=> {
     e.preventDefault();
     const data = {
       firstname: firstname.value,
       lastname: lastname.value,
       email: email.value,
       password: password.value,
       "confirm password": confirm_password.value,
     };
   
     const res = await fetch("/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         // "Content-Type": "application/x-www-form-urlencoded",
       },
       body: JSON.stringify(data),
     });
     const resp = await res.json();
     console.log(resp);
 
     if(resp.success){
       inputError.classList.remove("error");
       inputError.classList.add("success");
       inputError.innerHTML = `<div>${resp.success.message}</div> <button class="btn-close-error">&times;</button>`;
       [firstname,lastname, email,password,confirm_password].forEach((i)=>i.value='');
       location.replace('http://localhost:3000/login');
       return; 
     }


 
     if(resp.error) {
       inputError.classList.add("error");
       inputError.innerHTML = `<div>${resp.error.message}</div> <button class="btn-close-error">&times;</button>`;
       return;
     } else {
       inputError.classList.remove("error");
     }
 
    //  if(resp.mail_error) {
    //    inputError.classList.add("error");
    //    inputError.innerHTML = `<div>${resp.mail_error.message}</div> <button class="btn-close-error">&times;</button>`;
    //    return;
    //  }
   };

});


     
  