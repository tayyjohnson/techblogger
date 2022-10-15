async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // This function checks for a response - is it go time?!
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // This function checks for a response - yay or nay?
      if (response.ok) {
        console.log("success");
      } else {
        alert(response.statusText);
      }
    }
  }
  document
  // Generates a sign-up form for the user
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
  
  document
  // Generates a login form
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);