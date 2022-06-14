// /api/new-meetup
// only POST requests to this route trigger anything

function handler(req, res) {
    if (req.method === 'POST') {
        // checks to see if the request is a post
        const data = req.body;
        // what fields are expected from the data
        const { title, image, address, description } = data;

    }
}