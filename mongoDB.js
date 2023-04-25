// Require necessary modules
const mongoose = require('mongoose');

// Define a cache object for compiled models
const modelCache = {};

async function connectDB(node, mongoose, DBName) {
  await mongoose.connect(`mongodb://54.252.15.98/${DBName}`, { useNewUrlParser: true, useUnifiedTopology: true });
  node.warn('Connected to MongoDB');
}

async function disconnectDB(node, mongoose) {
  await mongoose.disconnect();
  node.warn('Disconnected from MongoDB');
}

module.exports = function(RED) {
  function processFunc(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', async function(msg) {
      // Connect to database
      await connectDB(node, mongoose, msg.DBName);
      try {
        node.warn("try")
        // Check if the model has already been compiled and cached
        if (!modelCache[msg.modelName]) {
          // If the model has not been cached, compile it and store it in the cache
          let schema = new mongoose.Schema(msg.schema);
          modelCache[msg.modelName] = mongoose.model(msg.modelName, schema, msg.modelName);
        }

        // Run query on model
        if (modelCache[msg.modelName][msg.method]) {
          const result = await modelCache[msg.modelName][msg.method](msg.query);
          msg.payload = result;
          node.send(msg);
        } else {
          node.error(`Invalid method: ${msg.method}`);
        }
      } catch (error) {
        node.warn(error)
      }
      

      // Disconnect from database
      await disconnectDB(node, mongoose);
    });
  }
  RED.nodes.registerType('mongoDBCustom', processFunc);
};
