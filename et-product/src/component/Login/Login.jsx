import React from 'react'
import '../Login/login.css'

function Login() {
  return (
    <div>
        <div className='containers'>
            <h1 className='title'>Login</h1>
            <form action="" className='container'>
                <label htmlFor="name">name</label><br />
                <input type="text"  placeholder='name' required/><br />
                <label htmlFor="email">email</label><br />
                <input type="email" required /><br />
                <label htmlFor="password">password</label><br />
                <input type="password" placeholder='password' /><br />
                <button>Login</button>
                <div>
                    <p>if you have't account please <a href="">Register</a></p>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
