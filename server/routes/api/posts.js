const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://yuwon:john119@jyp-hppms.mongodb.net/test",
      {useNewUrlParser: true, useUnifiedTopology: true}
    );
  
    return client.db('JYP').collection('Wevity');
  }
  
  module.exports = router;