import Twit from 'twit';

const { TOKEN, TOKEN_SECRET, CONSUMER_KEY, CONSUMER_TOKEN } = process.env;
const options = {
  access_token: TOKEN,
  access_token_secret: TOKEN_SECRET,
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_TOKEN
};

const client = new Twit(options);

export default client;