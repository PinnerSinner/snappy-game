import React from 'react';

function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form className="flex flex-col gap-4 w-1/3">
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
