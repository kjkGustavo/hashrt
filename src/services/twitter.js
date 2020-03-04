require('dotenv').config()
import client from '../config/twit';

const searchOptions = {q: process.env.HASHTAG, count: 20, result_type: "recent"}; 

export async function retweet(tweetId) {
  client.post(`statuses/retweet/${tweetId}`, null, (error, res) => {
    if(error) return;

    return console.log(`[RETWEET] Successfully retweeted!`)
  });
}

export async function searchTweets() {
  client.get('search/tweets', searchOptions, (error, data) => {
    if(error) return console.error(error);

    const { statuses } = data;
    const tweet = statuses[0];
    const { id_str } = tweet;

    console.log('[HASHTAG] Searching tweets...')
    retweet(id_str)
  });
}

