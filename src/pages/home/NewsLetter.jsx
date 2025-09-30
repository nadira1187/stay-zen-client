const NewsLetter = () => {
  return (
    <section className="py-20 bg-red-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Subscribe To Our Newsletter
              <span className="text-red-300 block mt-2">For Exciting Offers & Updates</span>
            </h2>
            <p className="text-red-100 text-lg leading-relaxed">
              Stay updated with our latest offers, exclusive deals, and special packages. Be the first to know about our
              luxury experiences and seasonal promotions.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-80 lg:w-96 rounded-2xl shadow-2xl"
              src="https://i.ibb.co/NsqDP9x/email.jpg"
              alt="Newsletter"
            />
          </div>
        </div>

        <div className="mt-12 max-w-md mx-auto lg:mx-0">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-300 focus:outline-none"
              placeholder="Enter your email address"
              type="email"
            />
            <button className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
          <p className="text-red-200 text-sm mt-4 text-center sm:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
