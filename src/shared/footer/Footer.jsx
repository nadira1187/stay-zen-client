import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img className="w-10 h-10" src="https://i.ibb.co/th996Q3/hotel-png.png" alt="StayZen Logo" />
              <span className="text-2xl font-bold">StayZen</span>
            </div>
            <p className="text-red-100 leading-relaxed mb-6 max-w-md">
              Where the art of hospitality meets the lap of luxury. Experience comfort, elegance, and exceptional
              service at StayZen.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-red-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/rooms" className="block text-red-100 hover:text-white transition-colors">
                Rooms
              </Link>
              <Link to="/mybookings" className="block text-red-100 hover:text-white transition-colors">
                My Bookings
              </Link>
              <a href="#" className="block text-red-100 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-red-100">
              <p>123 Ocean Drive</p>
              <p>Paradise Bay, PB 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@stayzen.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-12 pt-8 text-center">
          <p className="text-red-200">Copyright © 2025 - All rights reserved by StayZen Corporation Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
