import Banner from "../../components/banner/Banner";
import SpecialOffer from "../../components/specialOffer/SpecialOffer";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import Featured from "./Featured";
import { MyMap } from "./MyMap";
import NewsLetter from "./NewsLetter";


const Home = () => {
    return (
        <div>
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