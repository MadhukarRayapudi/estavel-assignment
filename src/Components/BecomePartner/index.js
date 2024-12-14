import { useNavigate } from "react-router-dom"

import "./index.css"

const BecomePartner = () =>{
    const navigate = useNavigate()
    const onClickBckBtn = () =>{
        navigate("/")
    }
    return(
        <div className = "shop-by-category-page">
            <h1 className = "main-heading"> This Page is under Construction, Please enjoy our home page meanwhile </h1> 
            <button className = "back-btn" onClick = {onClickBckBtn}> Go to Home Page </button>
        </div>
    )
}

export default BecomePartner