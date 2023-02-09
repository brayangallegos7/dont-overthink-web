import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  console.log(e);
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // reset the form
    //signInForm.reset();

    // show welcome message
    showMessage("¡Bienvenido!" + userCredentials.user.email);
    // window.location.href("./index.html");
    // sessionStorage.setItem('email', userCredentials.user.email);
    // sessionStorage.setItem('accesToken', userCredentials.user.accessToken);
    setTimeout(()=> location.href="./index.html",1500);
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Contraseña incorrecta", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("Correo no Registrado", "error")
    } else {
      showMessage("Algo Salió mal " + error.message, "error")
    }
  }
});
