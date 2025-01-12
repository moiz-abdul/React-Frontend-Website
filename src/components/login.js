import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login()
{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>
    {
        console.log(email + '' + password);  
    }
    return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow" style={{width: '400px'}}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={e=>setEmail(e.target.value)} id="email" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={e=>setPassword(e.target.value)} id="password" placeholder="Enter your password"/>
            </div>
            <p className="text-center mt-3">
            <Link href="#" className="text-decoration-none">Forgot Password?</Link>
        </p>
            <button type="button" onClick={submitForm} className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
                <p>
                  Don't have an account?{" "}
                  <a href="/signup" className="text-decoration-none">
                    Signup
                  </a>
                </p>
              </div>
        </div>
    </div>
    )
}