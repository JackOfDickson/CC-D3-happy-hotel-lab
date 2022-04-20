import React, {useState, useEffect} from 'react'
import FormBox from '../components/FormBox';
import BookingsList from '../components/BookingsList';

const HappyHotelContainer = () => {

    return (
    <>
        <h1>Happy hotels!</h1>
        <FormBox/>
        <BookingsList/>
    </>
    )
};
export default HappyHotelContainer