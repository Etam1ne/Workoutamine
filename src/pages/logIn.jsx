import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { Form } from "../components/Form";
import { Link } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('../userProfile');
      })
      .catch(() => alert("Invalid password or email"))
  }

  return (
    <main>
      <h1>Log in</h1>

      <Form 
        title="sign in"
        handleClick={handleLogin}
      />

      <p>
        Don't have an account? <Link to="/signUp">Sign Up</Link>
      </p>
    </main>
  );
}

export default LogIn;