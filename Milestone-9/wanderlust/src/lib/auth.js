import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('wanderlust');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
     emailAndPassword: { 
    enabled: true, 
  }, 
  }),
});

// BETTER_AUTH_SECRET=WoaFbZjRIX8Ye5HUcW49fwZjIwq6ZDWJ
// BETTER_AUTH_URL=http://localhost:3000 # Base URL of your app

// MONGODB_URI =mongodb+srv://wanderlust:wvBkEkzK2De5qEC4@cluster0.rsp6gjh.mongodb.net/