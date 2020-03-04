require('dotenv').config()
import { searchTweets } from './services/twitter';

searchTweets();
setInterval(() => {
  searchTweets();
}, 10000);
