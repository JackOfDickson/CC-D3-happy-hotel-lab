import React, {useState, useEffect} from 'react'
import FormBox from '../components/FormBox';
import BookingsList from '../components/BookingsList';
import { getBookings } from '../BookingsService';

const HappyHotelContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(()=> {
        getBookings()
            .then((allBookings) => {
                setBookings(allBookings);
            })
    }, []);

    const addBooking = (booking) => {
        const copy = bookings.map( s => s );
        copy.push(booking);
        setBookings(copy);
    }

    const removeBooking = (id) => {
        const copy = bookings.map( s => s);
        const indexToDelete = copy.map(s => s._id).indexOf(id);
        copy.splice(indexToDelete, 1);
        setBookings(copy);
    }





    return (
    <>
        <h1>Happy hotels!</h1>
        <FormBox addBooking={addBooking}/>
        <BookingsList bookings={bookings} removeBooking={removeBooking}/>
    </>
    )
};
export default HappyHotelContainer