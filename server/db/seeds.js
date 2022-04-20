use happy_hotel
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Steve Jobs",
        email_address: "stevejobs@apple.com",
        // check_in_date: "2022-05-02",
        // check_out_date: "2022-05-07",
        checked_in: "yes"
    },
    {
        name: "Bill Gates",
        email_address: "billgate@microsoft.com",
        checked_in: "no"
    }
]);