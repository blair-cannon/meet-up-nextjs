// /api/new-meetup
// only POST requests to this route trigger anything
// runs server side so this info will never end up on the client side, safe place for these credentials
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        // checks to see if the request is a post
        const data = req.body;
        // what fields are expected from the data
        const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://blairpreston:Babybear8@cluster0.dmjyq.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;