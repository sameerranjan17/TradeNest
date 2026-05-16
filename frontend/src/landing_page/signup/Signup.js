// import React from 'react';

// function Signup() {
//     return (  
//         <h1>SignUp</h1>
//     );
// }

// export default Signup;

// ai generated code
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // Using the environment variable strategy we set up for Render
            const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000";
            const response = await axios.post(`${API_URL}/signup`, { email, username, password });
            
            alert("Account created! You can now login.");
            console.log(response.data);
        } catch (err) {
            console.error("Signup Error:", err);
            alert("Signup failed. Check if the user already exists.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 border p-4 shadow-sm rounded bg-white">
                    <h1 className="text-center mb-4" style={{ fontWeight: 400 }}>Open a free account</h1>
                    <p className="text-muted text-center mb-4">Join over 1.5 crore happy customers.</p>
                    
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <input 
                                type="email" 
                                className="form-control p-2" 
                                placeholder="Email address" 
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control p-2" 
                                placeholder="Username" 
                                onChange={(e) => setUsername(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="password" 
                                className="form-control p-2" 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fs-5">Continue</button>
                    </form>

                    <div className="text-center mt-3">
                        <p className="text-muted small">
                            By proceeding, you agree to the terms and conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;