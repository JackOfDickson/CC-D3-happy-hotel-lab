const baseURL = 'http://localhost:4000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const updateBooking = (payload) => {
    return fetch(baseURL, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
}

export const deleteBooking = (id) => {
    return fetch(baseURL+id, {
        method: 'DELETE'
    })
}