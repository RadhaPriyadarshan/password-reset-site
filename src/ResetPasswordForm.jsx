import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ResetPasswordForm = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`https://password-reset-api-7lem.onrender.com/reset-password`, { token, newPassword });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Reset Password</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="New Password"
                    type="password"
                    variant="outlined"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" type="submit" color="primary">
                    Submit
                </Button>
            </form>
            {message && <Typography color={message.includes('successfully') ? 'success' : 'error'}>{message}</Typography>}
        </Container>
    );
};

export default ResetPasswordForm;
