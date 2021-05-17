import React from 'react'
import Header from '../Header'
import { uploadAdsImage, postyourAdd } from '../../config/firebase'
import { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Progress from '../../view/progress'
import './index.css'

const Sell = ({ user }) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [city, setCity] = useState("")
    const [imageUrl, setImageUrl] = useState();
    const [progress, setProgress] = useState(false)




    const addyourads = () => {
        const addObj = {

            title: title,
            price: price,
            desc: desc,
            contactNumber: contactNumber,
            city: city,
            image: imageUrl
        }

        // console.log('addobj', addObj)

        postyourAdd(addObj).then(response => {
            setProgress(false)
            alert("your Ads has been posted successfuly")
            setTitle("");
            setCity("")
            setContactNumber("");
            setDesc("");
            setPrice("");
            


         

        })

    





    }





    const getUrlOfPost = (e) => {

        // console.log(e.target.files)

        uploadAdsImage(e.target.files).then((res) => {
            // console.log(res)
            setImageUrl(res)
            setProgress(true)

        }).catch(e=>alert('sell',e.message))


    }


    return (
        <div style={{ height: "657px" }} className=" sell-maindiv">
            <Header user={user} />
            <div className="container-fluid">
                <div className="row">
                    {progress ? <Progress /> : null}
                    <h3 style={{ fontWeight: "1000" }} className="text-center">POST YOUR AD</h3>

                    <div style={{ border: "1px solid gray", }} className="col-md-4  offset-md-4 ">
                        <h4>Ad Title:</h4><input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" /><br />
                        <h4>  Ad Price (in Dollar):</h4><input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" /><br />
                        <h4>Ad Description:</h4><input onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Description" /><br /><br />
                        <h4>Contact Number:</h4><input onChange={(e) => setContactNumber(e.target.value)} type="text" placeholder="Description" /><br /><br />


                        <label>city</label>
                        <select onChange={(e) => setCity(e.target.value)}>
                            <option value="Islamabad">Islamabad</option>

                            <option value="Karachi">Karachi</option>

                            <option value="Lahore">Lahore</option>

                            <option value="Multan">Multan</option>
                        </select><br /><br />

                        <button type="button" className="btn btn-dark"><label htmlFor="images-upload">UPLOAD</label></button>
                        <input type="file" id="images-upload" className="inputfile" name="images-upload" onChange={(e) => getUrlOfPost(e)} /><br /><br />

                        {imageUrl ? <button onClick={() => addyourads()} type="button" className="btn btn-info">Post now</button> :
                            <button onClick={() => addyourads()} type="button" className="btn btn-info" disabled>Post now</button>}



                    </div>

                </div>

            </div>






        </div>
    )
}

export default Sell
