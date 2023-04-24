const redis = require('redis');

class RedisClient {
  constructor() {
    this.client = redis.createClient();

    this.client.on('error', (error) => {
      console.error(error);
    });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    return this.client.get(key, (err, result) => {
      console.log(result);
      return result;
    });
  }

  async set(key, value, duration) {
    this.client.set(key, value, 'EX', duration, () => {});
  }

  async del(key) {
    this.client.del(key, () => {});
  }
}

const redisClient = new RedisClient();
export default redisClient;
