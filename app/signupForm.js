import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
    console.log("usuario registrado")

    // reset the form
     signUpForm.reset();

    // show welcome message
    showMessage("¡Bienvenido! " + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Este correo ya esta en uso", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Correo invalido, revise el formato de correo.", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Contraseña muy corta, inserte al menos 6 caracteres.", "error")
    } else if (error.code) {
      showMessage("Error, Comuniquese con nosotros.", "error")
    }
  }

});