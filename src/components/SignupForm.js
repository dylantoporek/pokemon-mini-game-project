import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SignupForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isShown, setIsShown] = useState(false)

    const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
            onLogin(user)
            navigate('/')
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form id='signup-form' onSubmit={handleSubmit}>
        <input
          type="text"
          id="signup-username"
          autoComplete="off"
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="signup-password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input
          type="password"
          id="signup-password_confirmation"
          placeholder='password confirmation'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        {isShown ? 
        <button id='signup-form-submit' type="submit"
        style={{backgroundColor: 'gainsboro'}}
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}>
          Sign up
        </button>
        :
        <button id='signup-form-submit' type="submit"
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}>
          Sign up
        </button>}
      <div className='errors'>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    </form>
  );
}

export default SignupForm