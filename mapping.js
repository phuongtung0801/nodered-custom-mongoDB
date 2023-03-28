
const sqlite3 = require('sqlite3').verbose();
// /**
//  * @input
//  *  let errorCodeObj = {
//             name: "WibuLord",
//             unit: "",
//             bitfield32Value: 265,
//             metricValue: "bitfield32Value",
//             };
//  * @output 
//     let mappingErr = {
//         mappedErrCode: 1,
//         errorName: "Some description goes here"
//     }
//  */

// msg.topic = `CREATE TABLE AlarmHistory (
//             alert_code int NOT NULL,
//             alert_description varchar(255),
//             site_name varchar(255),
//             start_at DATETIME,
//             status varchar(255),
//             description varchar(255),
//             warning_level varchar(255),
//             clear_by varchar(255),
//             expected_damage varchar(255)
// );


module.exports = function(RED) {
    function processFunc (config) {     
        RED.nodes.createNode(this,config);
        var node = this;

        var db = new sqlite3.Database('memory');
        node.on('input', function(msg) {
            let errorCodeObj = msg.payload

            db.all(`SELECT * FROM "MappingScheme" WHERE Code = ${errorCodeObj.uint32Value}`, [], function(err, rows) {
                if (err) {
                    node.error(err.message);
                    return;
                }
                msg.payload = rows;
                node.send(msg);
            });
            // msg.payload = "hello"
            console.log(config);
            
        });

    }
    RED.nodes.registerType("mapping",processFunc);
}


// module.exports = function(RED) {
//     function MappingProcessNode(config) {
//         RED.nodes.createNode(this, config);
//         var node = this;

//         node.on('input', function(msg) {
//             // Do some processing here
//             msg.payload = 'Hello world!';
//             node.send(msg);
//         });
//     }

//     RED.nodes.registerType('mapping', MappingProcessNode);
// };
