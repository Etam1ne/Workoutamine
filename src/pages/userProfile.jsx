import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';

const UserProfile = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <main>
            <h1>Welcome</h1>
    
            <button
                onClick={() => dispatch(removeUser())}
            >Log out from {email}</button>
        </main>
    ) : (
        <Navigate to="/login"/>
    );
}

export default UserProfile;