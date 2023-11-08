5

const NewsLetter = () => {
    return (
        <div className="overflow-hidden">
            <div className="w-84 card  bg-red-200">
                <h2 className=" my-5 text-4xl font-bold text-center text-red-900"> Subscribe To Our Newsletter <br /> For Exciting Offer,Updates<br />& Deals.</h2>
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                    <div className="w-full lg:w-1/2">
                        <img className="ml-0 lg:ml-5 w-80 lg:w-[450px] mb-5" src="https://i.ibb.co/NsqDP9x/email.jpg" alt="" />
                    </div>
                    <div className=" form-control card-body">
                        <div className="">
                            <div className="join w-full lg:w-1/2 ">
                                <input className="input input-accent join-item" placeholder="Email" />
                                <button className="btn bg-red-900 text-white normal-case join-item rounded-r-full">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;