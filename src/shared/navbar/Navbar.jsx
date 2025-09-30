"use client"

import { Link, NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import swal from "sweetalert"
import {AuthContext} from "../../components/provider/AuthProvider"
const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
          isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
        }`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/rooms"
      className={({ isActive }) =>
        `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
          isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
        }`
      }
    >
      Rooms
    </NavLink>
    <NavLink
      to="/mybookings"
      className={({ isActive }) =>
        `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
          isActive ? "text-red-700" : "text-gray-700 hover:text-red-700"
        }`
      }
    >
      My Bookings
    </NavLink>
  </>
)

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user)
        swal("Successfully signed out!", {
          icon: "success",
        })
      })
      .catch()
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              src="https://i.ibb.co/th996Q3/hotel-png.png"
              alt="StayZen Logo"
            />
            <span className="text-2xl font-bold text-red-900">StayZen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">{links}</div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" onChange={handleToggle} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-700"></div>
            </label>

            {/* User Info */}
            {user && <span className="hidden sm:block text-sm font-medium text-gray-700">{user?.displayName}</span>}

            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              {user ? (
                <img
                  className="w-full h-full object-cover"
                  src={user?.photoURL || "/placeholder.svg"}
                  alt="User Avatar"
                />
              ) : (
                <FaUserCircle className="w-full h-full text-gray-400" />
              )}
            </div>

            {/* Auth Button */}
            {user ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors duration-300 text-sm font-medium"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors duration-300 text-sm font-medium"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">{links}</div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
