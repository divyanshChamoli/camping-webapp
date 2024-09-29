import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import TextArea from "../Components/TextArea";
import { useState } from "react";
import axios from "axios";
import Button from "../Components/Button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";

export default function CreateCampground(){
    const navigate=useNavigate()
    
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState(0)
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    
    const onClick= async ()=>{
        try{
            const res=await axios.post("http://localhost:3000/camp",{
                campName: name, 
                campDescription: description,
                campLocation: location,
                campPrice: price,
                campImageUrl: imageUrl
            },{
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            if(!res.data.Error){
                navigate("/home")
            }
        }
        catch(e){
            alert("Error!, Please try again")
            console.log(e)
        }
        setDescription("")
        setName("")
        setLocation("")
        setPrice(0)
        setImageUrl("")
    }
    
    return(
        <div className="h-screen w-screen bg-customYellow">
            <NavBar/>
            <div className="flex justify-center items-center mt-6">
                <div className="h-[75%] w-1/2 bg-primary shadow-md shadow-black rounded-md">
                    <div className="p-6">
                        <Heading label="Add Campground"/>
                        <InputBox label="Name" placeholder="Name of the campground" value={name} onChange={e=>setName(e.target.value)} />
                        <InputBox label="Location" placeholder="Address, or latitube longitude to display on Google Maps" value={location} onChange={e=>setLocation(e.target.value)} />
                        <InputBox label="Price" placeholder="Price in INR" type="number" value={price} onChange={e=>setPrice(parseInt(e.target.value))} />
                        <InputBox label="Image Url" placeholder="Paste the website url of the image here" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} />
                        <TextArea label="Description" placeholder="Share your experience!" rows={2} value={description} onChange={e=>setDescription(e.target.value)} />
                        <Button className="w-full rounded-sm mb-3 text-lg" size={"icon"} onClick={onClick}>
                            Add Campground!
                        </Button>
                        <Button size={"iconSmall"} onClick={()=>navigate("/home")}>
                            <ChevronLeft size={15}/> Back
                        </Button>
                    </div>
                </div>
            </div>     
        </div>
    )
}