import {Link} from "react-router-dom"

import "./index.css"

const Footer = () =>{
    return(
        <div className = "footer">
            <img src = "https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png" alt = "logo" className = "logo" />

            <div className = "footer-subclass">
                <div className = "footer-each-container">
                <br />
                    <h1 className = "footer-container-heading"> Product </h1>
                    <div>
                        <Link to = "/exclusive-store" className = "footer-container-item"> StonePedia Exclusive </Link>
                        <br/>
                        <Link to = "/best-sellers" className = "footer-container-item"> Best Seller </Link>
                        <br />
                        <Link to = "/premium-stones" className = "footer-container-item"> Premium Stones </Link>
                    </div>
                </div>

                <div className = "footer-each-container">
                <br />
                    <h1 className = "footer-container-heading"> Support </h1>
                    <div>
                        <Link className = "footer-container-item"> FAQs </Link>
                        <br />
                        <Link className = "footer-container-item"> Blogs </Link>
                        <br />
                        <Link className = "footer-container-item"> Help Center </Link>
                    </div>
                </div>

                <div className = "footer-each-container">
                <br />
                    <h1 className = "footer-container-heading"> Company </h1>
                    <div>
                        <Link className = "footer-container-item"> About Us </Link>
                        <br />
                        <Link className = "footer-container-item"> Carrier </Link>
                        <br />
                        <Link className = "footer-container-item"> Terms & Condition </Link>
                    </div>
                </div>

                <div className = "footer-each-container">
                <br />
                    <h1 className = "footer-container-heading"> Reach Us </h1>
                    <div>
                        <Link to = "https://www.instagram.com/stonepedia/" className = "footer-container-item"> Instagram </Link>
                        <br />
                        <Link to = "https://www.facebook.com/StonePedia1/" className = "footer-container-item"> Facebook </Link>
                        <br />
                        <Link to = "https://www.linkedin.com/company/stonepedia?originalSubdomain=in" className = "footer-container-item"> Linkedin </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer