require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 9000;
const uri = process.env.MONGO_URL; 

const app = express();

app.use(cors());
app.use(bodyParser.json());



// 2. API Routes
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({}); 
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({}); 
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    try {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save();
        res.status(201).send("Order saved");
    } catch (err) {
        res.status(500).send("Error saving order");
    }
});

app.get("/", (req, res) => {
    res.status(200).send("TradeNest's Backend is Running!");
});

// 1. Root Route
// The ":any" is the name of the parameter, and "(.*)" is the regex pattern
// Express 5 / path-to-regexp v8+ syntax
app.get("/{*any}", (req, res) => {
    res.status(200).send("TradeNest's Backend is Running!");
});

// 3. Optimized Database & Server Start
// We only start the server IF the database connection is successful.
mongoose.connect(uri)
    .then(() => {
        console.log("DB connected successfully!");
        app.listen(PORT, () => {
            console.log(`App Started! Backend is Listening on PORT ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err.message);
        console.log("Tip: Check your IP Whitelist in MongoDB Atlas and your .env password.");
    });