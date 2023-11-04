import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <header style={{ backgroundImage: "url('https://i.ibb.co/Df8sT8G/banner-slider.jpg')" }}
                className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover"
            >
                <div className="w-1/2 p-5 text-center  text-black  bg-red-200 bg-opacity-50 rounded-xl">
               <h2 className="font-bold text-4xl ">Where Every Stay is a Special Occasion!</h2> 
                <p className="text-lg mt-3">Immerse yourself in a world of luxury and convenience at our exquisite hotel. Experience the perfect blend of comfort and style during your stay with us.</p>
                <button className="btn btn-primary text-white normal-case bg-red-900 border-red-900"> <Link to='/login'>Get Started</Link></button>

                </div>
                
            </header>
            <div className="max-w-lg m-auto">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                    laoreet sem, semper molestie libero.
                </p>
                
                
            </div>
            {/* <section
                className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
            >
                <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
                    Parralax inline
                </div>
            </section>
            <div className="max-w-lg m-auto">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                    laoreet sem, semper molestie libero.
                </p>
            </div> */}
        </div>
    );
};

export default Banner;