import {Link} from "react-router-dom"

import { FaArrowRightLong } from "react-icons/fa6";

import Navbar from "../Navbar";

import Footer from "../Footer"

import "./index.css"

const MainPage = () => {
    return (
        <div className = "main-page">
            <Navbar />
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734097768/Screenshot_2024-12-13_191912_ls7bt0.png" alt = "main-page-image" className = "main-page-heading" />
            <p className = "tagline"> <span className = "decorative-line"> -------- </span>   Redifining Stone Sourcing   <span className = "decorative-line"> -------- </span> </p>
            <h1 className = "question"> Why StonePedia? </h1>

            <hr className = "horizontal-line"/>

            <div className = "features-container">
                <div className = "each-feature-card">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734106316/Screenshot_2024-12-13_213952_hbabbt.png" alt = "feature" className = "feature-image" />
                    <h1 className = "feature-heading"> Rigorous Quality Control </h1>
                    <p className = "feature-description"> Multi-level inspections ensure every stone meets the highest durability and aesthetic standards. </p>
                </div>

                <div className = "each-feature-card">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734106750/Screenshot_2024-12-13_214849_n91cz4.png" alt = "feature" className = "feature-image" />
                    <h1 className = "feature-heading"> Certified Suppliers & Compliance </h1>
                    <p className = "feature-description"> Sourced from certified suppliers, every stone complies with global and local regulations. </p>
                </div>

                <div className = "each-feature-card">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734106862/Screenshot_2024-12-13_215044_oeybux.png" alt = "feature" className = "feature-image" />
                    <h1 className = "feature-heading"> Expert Guidance and Support </h1>
                    <p className = "feature-description"> StonePedia’s specialists provide expert advice on material selection, application, and maintenance. </p>
                </div>

                <div className = "each-feature-card">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734106929/Screenshot_2024-12-13_215151_kitpl7.png" alt = "feature" className = "feature-image" />
                    <h1 className = "feature-heading"> Comprehensive High-Quality Stones </h1>
                    <p className = "feature-description"> Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics. </p>
                </div>

                <div className = "each-feature-card">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734106978/Screenshot_2024-12-13_215239_qjytrn.png" alt = "feature" className = "feature-image" />
                    <h1 className = "feature-heading"> Doorstep Delivery </h1>
                    <p className = "feature-description"> Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics. </p>
                </div>

                <div className = "each-feature-card">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734106978/Screenshot_2024-12-13_215239_qjytrn.png" alt = "feature" className = "feature-image" />
                    <h1 className = "feature-heading"> Guaranteed Order Fulfillment </h1>
                    <p className = "feature-description"> Accurate and timely order processing to meet all project timelines without delays. </p>
                </div>
            </div>
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1734107432/Screenshot_2024-12-13_220005_cwjykr.png" className = "poster" alt = "poster"/>

            <p className = "side-heading"> <span className = "decorative-line"> ------ </span> WHAT WE OFFER?</p>
            <h1 className = "choose-by-heading"> Choose By Category </h1>

            <button className = "view-more-btn"> VIEW MORE </button>

            <hr className = "horizontal-line" />

            <div className = "best-selling-container">
                <p className = "side-heading best-sellers-side-heading"> <span className = "decorative-line"> ------ </span> BEST IN DEMAND <span className = "decorative-line"> ------ </span> </p>

                <h1 className = "best-selling-heading"> Best Selling Products </h1>
                <Link to = "/best-sellers" className = "best-selling-button"> click here for best sellers <FaArrowRightLong className = "arrow-icon"/> </Link>
            </div>
            <Footer/ >
        </div>
    );
}

export default MainPage;
