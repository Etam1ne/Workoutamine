import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../firebase"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [namecheck, setNamecheck] = useState(true);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!username) {
            setNamecheck(false);
            return;
        }
        registerWithEmailAndPassword(username, email, password);
      };
    useEffect(() => {
      if (loading) return;
      if (user) navigate("../userProfile")
    });

    return (
        <main className="accountEnter">
            <h1>Sign Up</h1>

            <form onSubmit={(e) => {
                e.preventDefault(); 
                register();
            }}>

                <input 
                type="text" 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder={namecheck? "name": "please enter name"}
                className={namecheck? null: "red"}
                />

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
                <input type="submit" value="Sign up" />
                <button
                    onClick={signInWithGoogle}
                >
                Use Google
                </button>
            </form>

            <p>
                Already have an account? <Link to="/logIn">Sign in</Link>
            </p>
        </main>
    );
}

export default SignUp;