import React from 'react'
import "./Login.css"

export default function Login()
{
  return (
    <div className='loginbody'>
        <form action="/login" method="post">
            <span id="title">Sign in</span>
            <input type="text" id="username" name="username" placeholder="Username"/>
            <input type="password" id="password" name="password" placeholder="Password"/>
            <div id="button">
                <input type="submit" value="Login"/>
                <span className="rip1"></span>
                <span className="rip2"></span>
            </div>
        <div id="linksParent">
            <a>Sign up</a>
            <a>Forgot your password?</a>
        </div>
        </form>
    </div>
  )
}
