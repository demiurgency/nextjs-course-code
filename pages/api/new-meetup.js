import { MongoClient } from 'mongodb';
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    //const { title, image, addresss, description } = data;
    console.log('attempting to connect');
    console.log(data);
    const client = await MongoClient.connect(
      'mongodb+srv://agreene:1hscKvOnRJzjQTUU@cluster0.vxczz.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(JSON.parse(data));
    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

// mongodb+srv://agreene:<password>@cluster0.vxczz.mongodb.net/?retryWrites=true&w=majority

export default handler;
