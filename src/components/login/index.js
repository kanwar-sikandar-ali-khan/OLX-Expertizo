import React from 'react'
import { login } from '../../config/firebase'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const onLogin = () => {
        if (email && password) {

            login(email, password).then(res => {


                alert('Successfully Logged In');
                history.push('/dashboard')

            }).catch(e => {
                alert(e.message)
            })


            resetFields()

        } else {
            alert("please complete your details ")
        }

    }


    const resetFields = () => {
        setEmail('')
        setPassword('')
    }


    return (
        <div style={{ height: "657px" }} className="loginmain">
            <div className="container">
                <div className="row ">


                    <div className="col-md-7 login-col-text">

                        <h1 className="signuploginhead text-center">IMPERIAL STORE</h1><br />

                        <h1 className="signuploginhead text-center">Sell online with IMPERIAL STORE</h1>

                        <p>A great buyers' experience and their wish to return on
                        imperial store are largely dependent on the customer service provided by
                        the sellers. That's why we pay so much attention to your performance.
                        imperial store service metrics and seller performance levels will help
                      you get ahead of competitors and meet your customers' expectations.</p>

                    </div>
                    <div className="offset-md-1 col-md-4 login">

                        <form>
                            <h1 className="signuploginhead">LOGIN</h1><br />
                            <input
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required

                            /><br /><br />

                            <input
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required

                            /><br /><br />

                            <input onClick={onLogin} type="button" value="Login" className="btn btn-success" type="submit" />
                            <p style={{ cursor: "pointer" }} onClick={() => history.push('/')}>Not a user? Create account</p>
                        </form>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Login
