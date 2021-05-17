import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { logout, getAllUsers } from '../../config/firebase'
import Sellbutton from '../../view/sellbutton'
import LogoutButton from '../../view/logout'
import ImageAvatar from '../../view/avatar'


const Header = ({ user }) => {
    const history = useHistory()
    const [eachUser, setEacUser] = useState({})

    useEffect(() => {

        getAllUsers().then((res) => {

            const findUser = res.find(eachUser => eachUser.email === user.email)
            setEacUser(findUser)



        }).catch(e => console.log(e.message))


    }, [])

    return (
        <div className="">

            <div  className="container-fluid  bg-light header-container">
            {/* style={{position:"fixed"}} */}
                <div className="row">

                    <div className="col-md-9 col-sm-12">

                        <h2 onClick={() => { history.push('/dashboard') }} style={{ fontWeight: 1000, cursor: 'pointer' }}>IMPERIAL STORE</h2>


                    </div>


                    <div className="col-md-1 col-sm-12">


                        <Sellbutton />

                    </div>



                    <div className="col-md-1 col-sm-12 ">


                        <LogoutButton logout={logout} />

                    </div>


                    <div className="col-md-1 col-sm-12 ">


                        <ImageAvatar imageUrl={eachUser.profileImage} />


                    </div>




                </div>



            </div>

            {/* <div className="container-fluid">
                <div className="row">


                    <div className="offset-md-9 col-md-2  ">
                        <p onClick={() => history.push('/dashboard/profile')} style={{ fontWeight: 1000, cursor: 'pointer' }}>{eachUser.fullName}</p>

                    </div>

                </div>

            </div> */}






        </div>
    )
}

export default Header
