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
    <div>
    <div>
      <h2>Log In</h2>
      <input
        onChange={handleChange}
        value={login.email}
        type="text"
        // className="form-control"
        name="email"
        placeholder="Email Address"
      />
      <input
        onChange={handleChange}
        value={login.password}
        type="password"
        // className="form-control"
        name="password"
        placeholder="Password"
      />
      <button 
        onClick={handleSubmit}>
        Login
      </button>
    </div>
  </div>
  )
}

export default Login
