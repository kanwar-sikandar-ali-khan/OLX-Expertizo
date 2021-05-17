import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getSpecificAd, getAllUsers } from '../../config/firebase'
import Header from '../Header'


const Detail = ({ user }) => {
    const { adId } = useParams()
    const [adDetail, setAdDetail] = useState({})
    const [eachUser, setEacUser] = useState({})
    const [userId, setUserId] = useState("")

    // console.log("user auth",user)

    useEffect(() => {


        getAllUsers().then((res) => {

            // console.log(res)
            const findUser = res.find(eachUser => eachUser.email === user.email)
            setEacUser(findUser)

            // console.log(findUser.id)

            setUserId(findUser.id)


        }).catch(e => console.log(e.message))


        getSpecificAd(adId).then((response) => {
            setAdDetail(response)
        })


    }, [])



    return (
        <div>


            <Header user={user} />

            <div className="container">
                <div className="row ">

                    <div className="col-md-6    mt-5">


                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={adDetail.image} width="200" height="200" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item active">
                                    <img src={adDetail.image} className="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>



                    </div>



                    <div className="col-md-6    mt-md-5">

                        <h3 style={{ fontWeight: "1000" }} className="text-center">Details</h3>


                        <div className=" mt-md-5">

                            <h3>Price : {adDetail.price}$</h3><br />
                            <h3>Title : {adDetail.title}</h3><br />
                            <h3>Description : {adDetail.desc}</h3><br />
                            <h3>Contact Number : {adDetail.contactNumber}</h3><br />

                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default Detail
