import React from 'react'
import { useEffect, useState } from 'react'
import Header from "../../components/Header";
import { getAllUsers, uploadUserImage, updateProfileImage, updateProfileNumber, updateProfileName } from '../../config/firebase'
import Progress from '../../view/progress'
import './index.css'
const Profile = ({ user }) => {

    const [eachUser, setEacUser] = useState({})
    const [imageUrl, setImageUrl] = useState()
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [userId, setUserId] = useState("")
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(false)



    useEffect(() => {

        setLoading(false)

        getAllUsers().then((res) => {

            setLoading(true)
            // console.log(res)
            const findUser = res.find(eachUser => eachUser.email === user.email)
            setEacUser(findUser)

            console.log(findUser.id)

            setUserId(findUser.id)

        }).catch(e => console.log(e.message))


    }, [])



    const getUrlOfProfileImage = (e) => {

        // console.log(e.target.files)


        uploadUserImage(e.target.files).then((res) => {
            // console.log(res)
            setImageUrl(res)

            setProgress(true)


        }).catch(e=>alert(e.message))


    }



    const changeProfilePiture = () => {


        updateProfileImage(imageUrl, userId).then((res) => {
            alert("profile pic updated succesfully")
            console.log('profileurl', res)
            setProgress(false)

        }).catch(e =>(e.message))
    }

    const changeFullName = () => {

        // console.log(e.target.value)

        updateProfileName(fullName, userId).then((res) => {
            alert("profile Name updated succesfully")
            setFullName("")
        }).catch(e => e.message)

    }
    const changePhoneNumber = () => {

        // console.log(e.target.value)

        updateProfileNumber(phoneNumber, userId).then((res) => {
            alert("profile PhoneNumber updated succesfully")
            setPhoneNumber("")
        }).catch(e => e.message)


    }


    return (
        <div>
            <Header user={user} />


            <div className="container-fluid ">

                {loading ?

                    <div className="row">

                        {progress ? <Progress /> : null}

                        <h3 style={{ fontWeight: "1000" }} className="text-center">Profile view</h3>

                        <div className="col-md-3 offset-md-2 mt-5 ">
                            <img src={eachUser.profileImage} alt="" width="100" height="100" class="d-inline-block align-top" />
                            <h3 style={{ fontWeight: "1000" }} >{eachUser.fullName}</h3>


                        </div>


                        <div className="col-md-4  mt-5">



                            <form action="">
                                <h4>CHANGE YOUR PROFILE PICTURE </h4><br />

                                <button type="button" className="btn btn-dark"><label htmlFor="images-upload">UPLOAD</label></button>

                                <input type="file" id="images-upload" className="inputfile" name="images-upload" onChange={(e) => getUrlOfProfileImage(e)} /><br /><br />
                                {imageUrl ? <button type="button" onClick={changeProfilePiture} className="btn btn-info">Set Profile</button> :
                                    <button type="button" className="btn btn-info" disabled>Set Profile</button>}



                            </form><br />



                            <h4>Your Email:</h4> <input value={eachUser.email} type="text" disabled /><br /><br />

                            <span>  <h4>Your Full Name:</h4></span>    <input value={fullName} placeholder="Your Full Name" onChange={(e) => setFullName(e.target.value)} type="text" />
                            {fullName ? <button onClick={changeFullName} type="button" className="btn btn-info">Update</button> :
                                <button onClick={changeFullName} type="button" className="btn btn-info" disabled>Update</button>}<br /><br />



                            <h4>Your Phone Number:</h4><input value={phoneNumber} placeholder="Your Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} type="text" />
                            {phoneNumber ? <button onClick={changePhoneNumber} type="button" className="btn btn-info">Update</button> :
                                <button onClick={changePhoneNumber} type="button" className="btn btn-info" disabled>Update</button>}



                        </div>

                    </div>
                    :

                    <div className="row">
                        <div style={{ marginTop: "180px" }} className="col-md-3 offset-md-5 ">

                            <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />

                        </div>

                    </div>

                }

            </div>


        </div>
    )
}

export default Profile
