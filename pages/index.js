// domain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://via.placeholder.com/350x150',
        address: 'Some address 1, city, state',
        description: 'This is a first meetup'
    },
    {
        id: 'm1',
        title: 'A Second Meetup',
        image: 'https://via.placeholder.com/350x150',
        address: 'Some address 2, city, state',
        description: 'This is a second meetup'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://via.placeholder.com/350x150',
        address: 'Some address 3, city, state',
        description: 'This is a third meetup'
    }
]


function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;