import classNames from 'classnames'
import { deleteBooking } from '../BookingsService'

const Booking = ({booking, removeBooking}) => {


    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }
    
    // const checkboxClass = classNames( {
    //     "checked-in": booking.checked_in === true
    //     "not-checked-in": booking.checked_in === false
    // })
    // let check_instatus = null
    // if (booking.checked_in === true) {
    //     check_instatus = return <p>Check in status: Checked in!</p>
    // }




    return (
        <>
            <h3>Booking Name: {booking.name}</h3>
            <p>E-mail: {booking.email_address}</p>
            <p>Checked in? {booking.checked_in}</p>
            {/* <input type="checkbox" /> */}
            <button onClick={handleDelete}>Delete Booking</button>
        </>
    )
}
export default Booking