// domian.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import Head from 'next/head';

function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            } 

        })


        const data = await response.json();
        console.log(data);

        // take user away from page with successful meetup addition
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>New Meetup Form</title>
                <meta name="description" content="Add your own meet ups and create great opportunities."></meta>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetupPage;