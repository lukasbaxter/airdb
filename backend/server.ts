import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());

// Server & Database Configuration
const PORT = 5000;
const MONGO_URL = "mongodb://localhost:27017";
const client = new MongoClient(MONGO_URL);

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB (AirDB)");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
}
connectDB();

// Database Collections
const db = client.db("airdb");
const airportsCollection = db.collection("airports");

// ========================== AIRPORTS ==========================
// Get list of airports
app.get("/airports", async (req, res) => {
    try {
      console.log("Fetching airports...");

      const airports = await airportsCollection.find().toArray();
      res.json(airports);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch airports" });
    }
  });

// ========================== REGISTER USER ==========================



// ========================== LOGIN USER ==========================