// dynamically rendered page for multiple meetups with different id's
// id's should be part of the url
// and then when we load the page we want to use the id to fetch and display the appropriate data

import { Fragment } from "react";

function MeetupDetails() {
    return (
        <Fragment>
            <img src="https://via.placeholder.com/350x150" alt="meetup image"></img>
            <h1>A first meetup</h1>
            <address>Somestreet 1</address>
            <p>The description</p>
        </Fragment>
    )
}

export default MeetupDetails;