import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("../userProfile");
  });
  return (
    <main className="accountEnter">
      <h1>Sign In</h1>

      <form onSubmit={(e) => {
        e.preventDefault(); 
        logInWithEmailAndPassword(email, password);
      }}>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input type="submit" value="sign in" />
        <button
          onClick={signInWithGoogle}
        >
          Use Google
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signUp">Sign Up</Link>
      </p>
    </main>
  );
}

export default LogIn;