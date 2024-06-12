import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgetPasswordForm from './ForgetPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ForgetPasswordForm />} />
                <Route path="/forgot-password" element={<ForgetPasswordForm />} />
                <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
            </Routes>
        </Router>
    );
};

export default App;
