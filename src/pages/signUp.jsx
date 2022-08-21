import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { Form } from "../components/Form";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"

async function addInfo(user, username) {
    await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        username: username,
    });
}

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (email, password, username) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }),
                addInfo(user ,username)
                );

                navigate('../userProfile');
            })
            .catch(console.error)
    }

    return (
        <main className="accountEnter">
            <h1>Sign Up</h1>

            <Form
                title="sign up"
                handleSubmit={handleSignup}
            />

            <p>
                Already have an account? <Link to="/logIn">Sign in</Link>
            </p>
        </main>
    );
}

export default SignUp;