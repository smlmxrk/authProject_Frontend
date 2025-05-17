import React, {useState, FormEvent } from 'react';

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({email: '', password: ''});
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
};