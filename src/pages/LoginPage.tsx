import React, { useState, FormEvent, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const { message } = await response.json();
                throw new Error(message || 'Login failed');
            }


            console.log('Logged in successfully');
        } catch (err: any) {
            toast.error(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 to-orange-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Toast container */}
            <Toaster position="top-right" />

            <div className="w-full max-w-md">
                <div className="mb-6 bg-white p-6 rounded-2xl shadow-md">
                    <h1 className="text-center text-3xl font-extrabold gradient-text">
                        authProject
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
                        Sign in to your account
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>

            <a
                href="https://github.com/smlmxrk"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                    <path
                        fill="currentColor"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.005 2.044.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.877.12 3.18.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.92.43.37.814 1.102.814 2.222 0 1.605-.015 2.896-.015 3.286 0 .321.216.699.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
                    />
                </svg>
            </a>
        </div>
    );
};

export default LoginPage;
