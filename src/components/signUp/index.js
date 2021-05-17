import React from 'react'
import { useState, useEffect } from 'react'
import { register, addUserToDb } from '../../config/firebase'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState()
    const [profileImage, setProfileImage] = useState("https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png")
    const history = useHistory()
    const dispatch = useDispatch()


    const onSignup = (e) => {


        if (fullName) {

            if (password === confirmPassword) {

                register(email, password).then(res => {


                    addUserToDb({ email, fullName, phoneNumber, profileImage }).then(res => {
                        alert(`Email "${email}" has been successfully registered!`);
                        dispatch({ type: "currentUser", payload: { email, fullName, phoneNumber } })

                        history.push('/login')
                    }).catch(e => {
                        alert(e.message)
                    })



                }).catch(e => {
                    alert(e.message)

                })

            } else {
                alert("password did not match")
            }

        } else {
            alert("please complete your details ")
        }

        setFullName("");
        setEmail("");
        setPassword("")
        setPhoneNumber("")
        setConfirmPassword("")


    }

    return (



        <div style={{ height: "657px" }} className="signupmain">
            <div className="container">

                <div className="row ">
                    <div className="col-md-7   signup-col-text">

                        <h1 className="signuploginhead text-center">IMPERIAL STORE</h1><br />

                        <h1 className="signuploginhead text-center">Sell online with IMPERIAL STORE</h1>

                        <p>A great buyers' experience and their wish to return on
                        imperial store are largely dependent on the customer service provided by
                        the sellers. That's why we pay so much attention to your performance.
                        imperial store service metrics and seller performance levels will help
                            you get ahead of competitors and meet your customers' expectations.</p>

                    </div>
                    <div className="col-md-3 offset-md-1  signup ">
                        <h1 className="signuploginhead">SIGN UP</h1>
                        <form action="">
                            <input

                                placeholder="Fullname"
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                                required /><br /><br />

                            <input
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required /><br /><br />

                            <input
                                placeholder="Phone Number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phoneNumber}
                                required /><br /><br />


                            <input
                                placeholder="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            /><br /><br />

                            <input
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                required
                            /><br /><br />

                            <input onClick={(e) => onSignup(e)} type="button" value="Sign up" className="btn btn-success" type="submit" />
                            <p style={{ cursor: "pointer" }} onClick={() => history.push('/login')}>Already a user? Login</p>

                        </form>

                    </div>

                </div>

            </div>




        </div>
    )
}
export default SignUp
