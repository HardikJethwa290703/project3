import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
    // const [name, setName] = useState('');
    // const [email, setEamil] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [data, setData] = useState({name : '',email : '',username : '',password : ''})

    const handleData = (e) => {
        e.preventDefault();
        // const user = {
        //     name,
        //     email,
        //     username,
        //     password
        // };
        const user = data;
        axios.post("http://localhost:4000/",user)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    }
    return (
        <div className="container border" style={{marginTop : 50, padding : 50, width : 500, }}>
            <div
                className="row"
            >
                <h1>Register</h1>
                <form onSubmit={handleData}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder=""
                            onChange={(e) => setData({...data, name : e.target.value})}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder=""
                            onChange={(e) => setData({...data ,email : e.target.value})}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder=""
                            onChange={(e) => setData({...data, username : e.target.value})}
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder=""
                            onChange={(e) => setData({...data, password : e.target.value})}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Register
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Register
