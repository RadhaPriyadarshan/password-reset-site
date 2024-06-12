import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const ForgetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://password-reset-api-7lem.onrender.com/forgot-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Forget Password</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email address"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

export default ForgetPasswordForm;
