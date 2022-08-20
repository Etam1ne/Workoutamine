import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Active from './pages/active';
import UserProfile from './pages/userProfile';
import NoPage from './pages/noPage';
import LogIn from './pages/logIn';
import SignUp from './pages/signUp';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="active" element={<Active />}/>
                <Route path="userProfile" element={<UserProfile />} />
                <Route path="logIn" element={<LogIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="*" element={<NoPage />}/>
            </Route>
      </Routes>
    );
}

export default App;