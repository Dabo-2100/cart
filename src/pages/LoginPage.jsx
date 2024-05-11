import { useState } from "react"

export default function LoginPage() {
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    function login() {

    }
    return (
        <div>
            <input type="email" onKeyUp={(e) => { setEmail(e.target.value) }} />
            <input type="password" onKeyUp={(e) => { setPassword(e.target.value); }} />
            {email}
            {password}
            <button onClick={() => { login() }}>Login</button>
        </div>
    )
}
