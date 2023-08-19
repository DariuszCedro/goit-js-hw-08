const e=document.querySelector(".feedback-form");document.querySelector('[name="email"]');e.addEventListener("input",(function(e){const{elements:{email:t,message:a}}=e.currentTarget,n={email:t.value,message:a.value};console.log(n),localStorage.setItem("feedback-form-state",JSON.stringify(n))}));
//# sourceMappingURL=03-feedback.0b7d8b7d.js.map
