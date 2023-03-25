/* import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector("#cerrarSesion");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    console.log("signup out");
    setTimeout(()=> location.href="./login.html",500);
  } catch (error) {
    console.log(error)
  }
});
 */