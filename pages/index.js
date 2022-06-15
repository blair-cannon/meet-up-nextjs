// domain.com/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function HomePage(props) {
  return (
    <>
      {/* need to set head properties for SEO (descriptions) and page titles */}
      <Head>
        <title>React Meetings</title>
        <meta name="description" content="Browse a hug list of highly active React meetups"></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps() {
  //fetch data from API
  const client = await MongoClient.connect('mongodb+srv://blairpreston1:testpass123@cluster0.dmjyq.mongodb.net/meetup?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString() 
      })
        )
    },
    revalidate: 1
  };
}

export default HomePage;