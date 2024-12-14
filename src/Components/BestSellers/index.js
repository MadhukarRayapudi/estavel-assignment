import { useNavigate } from "react-router-dom";

import "./index.css"

const tilesArray = [
    {id: 1, tileName: "Forest Black", tilePrice: "₹1.00 per sq/ft", tileImage: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734155225/Screenshot_2024-12-14_111454_rywnzz.png"},
    {id: 2, tileName: "Kuppam Green Granite", tilePrice: "₹1.00 per sq/ft", tileImage: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734155225/Screenshot_2024-12-14_111511_vhzvhi.png"},
    {id: 3, tileName: "Forest Green", tilePrice: "₹1.00 per sq/ft", tileImage: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734155225/Screenshot_2024-12-14_111526_wepctp.png"},
    {id: 4, tileName: "Kaddapah Black", tilePrice: "₹1.00 per sq/ft", tileImage: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734155225/Screenshot_2024-12-14_111547_qq6wtx.png"}
]

const BestSellers = () =>{
    const navigate = useNavigate()

    const backBtnClicked = () =>{
        navigate("/")
    }
    return(
    <div className = "best-sellers-page">
        <h1 className = "best-sellers-heading"> OUR BEST SELLERS </h1>
        <div className = "best-sellers-cards-container">
            {tilesArray.map((eachTile)=>
                <div className = "each-best-sellers-card" key = {eachTile.id}>
                    <img src = {eachTile.tileImage} alt = "best-seller-image" className = "best-seller-image" />
                    <h1 className = "item-name"> {eachTile.tileName} </h1>
                    <p className = "item-price"> {eachTile.tilePrice} </p>
                </div>
            )}
        </div>
        <button className = "back-btn" onClick = {backBtnClicked}> Back </button>
    </div>
    )
}

export default BestSellers