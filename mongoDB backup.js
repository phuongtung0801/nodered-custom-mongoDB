// Require necessary modules
const mongoose = require('mongoose');
const dataArr = require('./schema/SiteList')



// CRUD operations
async function createData(node, Model, name, age, email) {
    const newData = new Model({ name, age, email });
    try {
      await newData.save();
      node.warn(`Data with id ${newData._id} has been created`);
      return true; // Return a value indicating success
    } catch (err) {
      node.warn('Error creating data:', err);
      return false; // Return a value indicating failure
    }
}

// async function readData() {
//   const data = await Model.find();
//   node.warn(data);
// }

// async function updateData(id, name, age, email) {
//   const updatedData = await Model.findByIdAndUpdate(id, { name, age, email }, { new: true });
//   node.warn(`Data with id ${updatedData._id} has been updated`);
// }

// async function deleteData(id) {
//   await Model.findByIdAndDelete(id);
//   node.warn(`Data with id ${id} has been deleted`);
// }

// Usage
// createData('John Doe', 25, 'john.doe@example.com');
// readData();
// updateData('60c0e29a0b660047f8d6e15e', 'Jane Doe', 30, 'jane.doe@example.com');
// deleteData('60c0e29a0b660047f8d6e15e');

/**
 * 
 * INIT SCHEMA AND MODEL 
 */
let SiteNameIDMapSchema
let SiteNameIDMap
async function connectDB(node, mongoose)
{
    await mongoose.connect('mongodb://54.252.15.98/nodered_alarm', { useNewUrlParser: true, useUnifiedTopology: true });
    node.warn('Connected to MongoDB');
}


async function disconnectDB(node, mongoose)
{
    await mongoose.disconnect()
    node.warn('Disconnected from MongoDB');
}

async function initSchemaModel(node, mongoose) {
    try {
      // Connect to MongoDB database
      await connectDB(node, mongoose);
      
      // Define schema and model
        SiteNameIDMapSchema = new mongoose.Schema({
        site_name: {
          type: String,
          required: true,
          unique: true
        },
        site_label: {
          type: String,
          required: true
        }
      });
       SiteNameIDMap = mongoose.model('SiteNameIDMap', SiteNameIDMapSchema, 'alarm_scheme');

      // Disconnect from MongoDB database
      await disconnectDB(node, mongoose);
    } catch (error) {}
}
  

async function insertDoc(node, mongoose) {
    const connect = await connectDB(node, mongoose); // Establish MongoDB connection
    try {   
    for (const element of dataArr)
    {
        try {
            const result = await SiteNameIDMap.create({
            site_name: element.site_name,
            site_label: element.site_label
            });
            node.warn(`New site saved: ${result}`);
        } catch (error) {
            node.warn(`Error saving site: ${error}`);
        }
    }
    node.warn('Disconnected from MongoDB');
    } catch (error) {
      node.warn(`Error connecting to MongoDB: ${error}`);
    }
    await mongoose.disconnect();
}
  

  
let checker = false
module.exports = function(RED) {
    function processFunc (config) {     
        RED.nodes.createNode(this,config);
        var node = this;
       
        node.on('input', function(msg) {
          ///create schema: msg.schema
          ///create model:
          ///execute query
            if (!checker) {
                initSchemaModel(node, mongoose)
                checker = true
            }
            else {
                if (mongoose.connection.models['SiteNameIDMap']) {
                    node.warn('MyModel exists in Mongoose');
                    
                    insertDoc(node, mongoose).catch(err => this.warn("somthing wrong: " + err));
                } else {
                    node.warn('MyModel does not exist in Mongoose');
                }
            }
        
            node.send(msg);
        });

    }
    RED.nodes.registerType("mongoDBCustom",processFunc);
}

