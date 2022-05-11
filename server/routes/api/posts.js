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
      "mongodb+srv://choisID:choisPW@cluster0-f7sw4.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
  );

  return client.db('cluster0').collection('posts');
}
  
  module.exports = router;
