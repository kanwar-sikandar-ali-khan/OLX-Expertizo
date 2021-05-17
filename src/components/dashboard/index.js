import React from 'react'
import Header from '../Header'
import { useEffect, useState } from "react";
import { getAllAds } from "../../config/firebase";
import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../config/firebase'

const DashBoard = ({ user }) => {

    const [Ads, setAds] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [specificAds, setspecificAds] = useState([])
    const [spcAdsboolen, setspcAdsboolen] = useState(true)
    // const dispatch = useDispatch() 



    useEffect(() => {

        setLoading(true)

        getAllAds().then(res => {
            setLoading(false)
            setAds(res)
            // console.log("ALL ADDS", res)
        })

        // getAllUsers().then((res) => {

        //     dispatch({type:"ALL users",payload:res})
        //     dispatch({type:"userEmail",payload:user.email})

        // }).catch(e => console.log(e.message))


    }, [])

    // console.log("all ads", Ads)

    const SearchAds = (e) => {

        if (e.target.value === "") {

            console.log("no item found")

        } else {
            const findAds = Ads.filter(spcAds => e.target.value[0].toLowerCase() === spcAds.title[0].toLowerCase())
            console.log("find Ad", findAds)
            setspecificAds(findAds)
        }


    }


    const allAds = Ads.map((v, i) => {


        return (


            <div style={{ border: "0px solid gray", marginTop: "20px" }} onClick={() => history.push(`/dashboard/details/${v.id}`)} className="col-md-4 col-sm-12 a" key={i}>

                <div style={{ border: "1px solid gray", marginLeft: "2px" }} >

                    <img src={v.image} height="200px" width="300px" /><br />

                </div>



                <h4 className="text-center dashbimgtitle">{v.title}</h4>
                {/* hta don ga */}


            </div>


        )

    })






    const spcAds =


        specificAds.map((v, i) => {

            return (

                <div>


                    <div onClick={() => history.push(`/dashboard/details/${v.id}`)} className="col-md-4  mt-md-2 " key={i}>

                        <img src={v.image} height="200px" width="300px" /><br />

                        <h4 className="text-center dashbimgtitle">{v.title}</h4>
                        {/* hta don ga */}


                    </div>

                </div>
            )
        })

    return (
        <div>
            <Header user={user} />
            <div className="container-fluid ">
                <div class="row ">

                    <img height="200" src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" />

                </div>
                <div className="row ">

                    <div className="offset-md-9 col-md-3 mt-4  ">

                        <input onChange={(e) => SearchAds(e)} placeholder="search" type="text" />
                        <button onClick={(e) => setspcAdsboolen(false)} type="button" className="btn btn-outline-success my-2 my-sm-0">Search</button>

                    </div>

                </div>

                <div className="row">
                    <div className="col-md-3 offset-md-5 ">

                        {loading && <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />}

                    </div>

                </div>


            </div>



            <div className="container  bg-light mt-3" >

                <div className="row " style={{ cursor: "pointer" }}>


                    {spcAdsboolen ? allAds :

                        <div className="">
                            <button onClick={(e) => setspcAdsboolen(true)} type="button" className="btn btn-success">GO BACK</button>

                            {spcAds} 



                        </div>


                    }

                </div>

            </div>

        </div >
    )
}

export default DashBoard
