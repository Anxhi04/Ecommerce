import react from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollection from "../components/NewCollection/Newcollection";

const Shop=()=>{
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Newcollection />
        </div>
    )
}   
export default Shop;