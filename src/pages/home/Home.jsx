import Banner from "../../components/banner/Banner";
import SpecialOffer from "../../components/specialOffer/SpecialOffer";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Featured from "./Featured";
import { MyMap } from "./MyMap";
import NewsLetter from "./NewsLetter";
import {Helmet} from "react-helmet";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <SpecialOffer></SpecialOffer>
            <NewsLetter></NewsLetter>
            <MyMap></MyMap>
            <Footer></Footer>
        </div>
    );
};

export default Home;