!function(){var e=document.querySelector(".feedback-form");document.querySelector('[name="email"]');e.addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,n=t.message,r={email:a.value,message:n.value};console.log(r),localStorage.setItem("feedback-form-state",JSON.stringify(r))}))}();
//# sourceMappingURL=03-feedback.39c674ae.js.map
