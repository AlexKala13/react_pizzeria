import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/context'
import PostService from '../API/PostService';
import { APIS } from '../API/ApiUrls';

const Register = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const history = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        telephone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const registerResponse = await PostService.registerUser(APIS.registerUrl, formData);

            if (registerResponse) {
                const user = [formData.email, formData.password];
                const response = await PostService.logInUser(APIS.logInUrl, user);
                const responseToken = response.data.data;

                localStorage.setItem('token', responseToken);
                setIsAuth(true);
                localStorage.setItem('auth', 'true');

                history('/profile');
            }
        } catch (error) {
            console.log(error);
        }

        setFormData({
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            telephone: '',
            password: ''
        });
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <label>Telephone:</label>
                <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
