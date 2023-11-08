import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Banner = () => {
  return (
    <div className="overflow-hidden">
      <header style={{ backgroundImage: "url('https://i.ibb.co/Df8sT8G/banner-slider.jpg')" }}
        className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover"
      >
        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-1/2 p-0 md:p-5  text-center  text-black  bg-red-200 bg-opacity-50 rounded-xl">
          <h2 className="font-bold text-3xl md:text-4xl">Where Every Stay is a Special Occasion!</h2>
          <p className="text-base  md:text-lg mt-3">Immerse yourself in a world of luxury and convenience at our exquisite hotel. Experience the perfect blend of comfort and style during your stay with us.</p>
          <button className="btn btn-primary text-white normal-case bg-red-900 border-red-900"> <Link to='/login'>Get Started</Link></button>

        </div>
    </header>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className=" h-fit flex flex-col lg:flex-row-reverse justify-center items-center">
        <div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-red-900 rounded-box">
          <div id="item1" className="carousel-item">
          <img src="https://i.ibb.co/47ft2yC/single-gallery-image-1.jpg" className="rounded-box" />
           </div>
          <div  id="item2" className="carousel-item">
            <img src="https://i.ibb.co/wwgZCGr/rooms-list-image-15.jpg" className="rounded-box" />
          </div>
          <div  id="item3" className="carousel-item">
          <img src="https://i.ibb.co/m9bQzDN/rooms-list-image-16.jpg" className="rounded-box" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a>
</div>
        </div>
        <div className=" w-full lg:w-1/2">
          <p className="mb-4 p-4">
            <p className="text-2xl text-red-900 font-medium">Welcome to StayZen</p>
            <h2 className="text-4xl text-red-900 font-mono font-semibold">A New Vision of Luxury</h2>
            <p className="text-xl text-red-900 ">Where the art of hospitality meets the lap of luxury. Nestled in the heart of ocean, our hotel offers a sanctuary of comfort and elegance for travelers seeking a remarkable stay.</p>
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold font-mono text-center text-red-900 my-6">Special Offers</h2>

      <section className="rounded-lg container flex flex-col lg:flex-row items-center justify-center min-h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-[url('https://i.ibb.co/8xjxJxL/img.jpg')]">
        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-full lg:w-1/2">
          <img className="h-48 md:h-[500px] rounded-lg shadow-md ml-3" src="https://i.ibb.co/P66bKqj/promotional.jpg" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-full lg:w-1/2 p-4 mr-0 lg:mr-4 lg:p-5 mt-4 md:mt-0 text-white bg-red-200 bg-opacity-75 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-red-900 my-2 md:my-6">Stay & Dine Special <br />Now only in 50%</h2>
          <h4 className="text-xl md:text-2xl font-medium text-center text-red-900">Deluxe hotel room & meal for two</h4>
          <p className="text-base md:text-lg">
            Introducing our Stay & Dine Special, a perfect combination of luxury and culinary delight. Treat yourself and a loved one to an unforgettable experience with our deluxe hotel room and exquisite meal for two.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;