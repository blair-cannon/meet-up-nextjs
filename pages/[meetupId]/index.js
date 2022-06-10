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

export async function getStaticPaths() {
    //returns an object that describes all possible pages that need to be 
    // pre-generated
    // would also be fetched from database, but hardcoded for now
    // fallback: false -- pre generate these pages and give a 404 error if
    // a request for any other pages come in
    // fallback: true, pre-generate the following pages and also generate othe
    // paths. when the request comes in
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1'
                },
            },
            { 
                params: {
                    meetupId: 'm2'
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    // use context to know which single meetup data to be fetching
    const meetupId = context.params.meetupId;
    console.log(meetupId)

    return {
        props: {
            meetupData: {
                image:'https://via.placeholder.com/350x150',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 1',
                description:'This is a first meetup',
            }
        }
    }
}
export default MeetupDetails;