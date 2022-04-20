import { useState } from "react";
import { postBooking } from "../BookingsService";

const FormBox = ({addBooking}) => {

    const [formData, setFormData] = useState({});

    const onChange = (event) => {
        formData[event.target.id] = event.target.value
        setFormData(formData)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
    }

    return (
    <form onSubmit={onSubmit}>
        <h2>New Booking:</h2>
        <label htmlFor="name">Booking Name:</label>
        <input onChange={onChange} type="text" id="name"/>
        <label htmlFor="email_address">E-mail Address</label>
        <input onChange={onChange} type="text" id="email_address"/>
        <label htmlFor="checked_in">Checked in?</label>
        <input onChange={onChange} type="radio" value="yes" id="checked_in"/>
        <label for="yes">Yes</label>
        <input onChange={onChange} type="radio" value="no" id="checked_in"/>
        <label for="no">No</label>
        {/* <input type="checkbox" id="checked_in"/> */}

        <input type="submit" value="Save" id="save"/>
    </form>
    )
}
export default FormBox