import redisClient from "./utils/redis";

(async () => {
  console.log(redisClient.isAlive());             // Check if the Redis client is alive (connected)
  console.log(await redisClient.get("myKey"));    // Try to get a value from Redis
  await redisClient.set("myKey", 12, 5);          // Set a key in Redis with an expiration time
  console.log(await redisClient.get("myKey"));    // Get the key's value after setting it

  setTimeout(async () => {
    console.log(await redisClient.get("myKey"));  // Try to get the key's value after it should have expired
  }, 1000 * 10);  // Wait for 10 seconds
})();
