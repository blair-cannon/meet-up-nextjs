// dynamically rendered page for multiple meetups with different id's
// id's should be part of the url
// and then when we load the page we want to use the id to fetch and display the appropriate data

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            img='https://via.placeholder.com/350x150'
            title='A first meetup'
            address='Some Street 1'
            description='This is a first meetup'
        />
    )
}

export default MeetupDetails;