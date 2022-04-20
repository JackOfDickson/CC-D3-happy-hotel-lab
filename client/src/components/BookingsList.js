import Booking from "./Booking"

const BookingsList = ({bookings, removeBooking}) => {

    const bookingsNode = bookings.map((booking) => {
            return (
                <Booking name={booking} key={booking._id} removeBooking={removeBooking} />
            )
        })

    return (
        <>
            <p>List of bookings</p>
            {bookingsNode}
        </>
    )
}
export default BookingsList