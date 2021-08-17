import React, {useState} from 'react'

const Login = () => {

    const [login, setLogin] = useState({email: '', password: ''})


  const handleSubmit = ()=> { 
   console.log('button clicked')
  }

  const handleChange = (event) => { 
    console.log('handleChange - event', event.target.value)
    console.log('handleChange - name', event.target.name)
    const name = event.target.name // name will be either email or password depending on which field 
    setLogin({ 
      // email: 
      // password:
      ...login,
      [name]: event.target.value
    })
  }


  return (
  <div className="login-page">
  <h2>Please Sign In</h2>
  <div className="login-checkout">
    
      <div className="login">
        <input
          onChange={handleChange}
          value={login.email}
          type="text"
          // className="form-control"
          name="email"
          placeholder="Email Address"
        />
        <br></br>
        <input
          onChange={handleChange}
          value={login.password}
          type="password"
          // className="form-control"
          name="password"
          placeholder="Password"
        />
        <br></br>
        <button 
          onClick={handleSubmit}>
          Login
        </button>
      </div>
      <div className="guest">
        <h3>Guest Checkout</h3>
        <h3>Proceed to Checkout</h3>
        <button>Continue as Guest</button>
      </div>
    </div>
  </div>
  )
}

export default Login
