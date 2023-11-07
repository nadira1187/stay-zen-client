import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import Navbar from "../../shared/navbar/Navbar";
import BookingCard from "./BookingCard";
import Moment from "moment";
import Swal from "sweetalert2";
import Footer from "../../shared/footer/Footer";
import { Helmet } from "react-helmet";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`, { credentials: "include" })
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    const calculateCancellationDeadline = (bookingDate) => {
        const currentDate = Moment(); // Get the current date and time
        const bookingMoment = Moment(bookingDate); // Convert the booking date to a Moment object
        const deadline = bookingMoment.subtract(1, 'days'); // Calculate the deadline
    
        // Compare the current date to the deadline
        if (currentDate.isBefore(deadline)) {
            return deadline;
        } else {
            return null; // Return null if cancellation is not allowed
        }
    };
    
    

    const isCancellationEligible = (booking) => {
        const bookingDate = Moment(booking.bookingDate);
        const cancellationDeadline = calculateCancellationDeadline(bookingDate);
        return Moment().isBefore(cancellationDeadline);
    };

    const handleCancel = (bookingId) => {
        const booking = bookings.find((booking) => booking._id === bookingId);
    
        if (booking) {
            const bookingDate = Moment(booking.date);
            const cancellationDeadline = calculateCancellationDeadline(bookingDate);
    
            if (cancellationDeadline && Moment().isBefore(cancellationDeadline)) {
                Swal.fire({
                    title: 'Cancel Booking',
                    text: 'Are you sure you want to cancel this booking?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, cancel it'
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`http://localhost:5000/bookingss/${bookingId}`, {
                            method: 'DELETE'
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount > 0) {
                                Swal.fire('Canceled!', 'Your booking has been canceled.', 'success');
                                const remaining = bookings.filter((booking) => booking._id !== bookingId);
                                setBookings(remaining);
                            }
                        });
                    }
                });
            } else {
                Swal.fire('Cancellation Not Allowed', 'This booking can no longer be canceled.', 'error');
            }
        }
    };
    
    

    return (
        <div>
             <Helmet>
                <title>Booking</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                {bookings.map((booking) => (
                    <BookingCard
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleCancel}
                    >
                        {booking.description}
                        {isCancellationEligible(booking) ? (
                            <button onClick={() => handleCancel(booking._id)}>Cancel</button>
                        ) : (
                            <p>Booking can no longer be canceled.</p>
                        )}
                    </BookingCard>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBookings;
