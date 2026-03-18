const {model, Model} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = {PositionsModel};