/**
 * Made by: <AbdulRahman El-zahaby>
 * run: node examples/create-kvm-with-entries.js json-file-path.json
 */
let fs = require('fs');
let conn = require('../api/conn.js');
let kvm = require('../api/kvm.js');
let kvmEntry = require('../api/kvm_entries.js');



// use fetch to make http requests
// get command line arguments
let args = process.argv.slice(2);
if (args.length < 1) {
    console.error("Please provide the json file path.");
    return;
}

let filePath = args[0];


// get file content (args[0] is the file path)
let json = fs.readFileSync(filePath, 'utf8');
json = JSON.parse(json);
// json 
// {
//     "name": "KVM-name",
//     "entries": [
//         {
//             "name": "keyname",
//             "value": "value"
//         }
//     ]
// }


// remove KVM
kvm.remove(conn, json.name).then((data) => {
    // create KVM
    kvm.create(conn, json.name)
    .then((data) => {
        console.log("KVM created!", data);
        // create entries
        json.entries.forEach(entry => {
            kvmEntry.create({
                conn,
                kvmName: json.name,
                entryName: entry.name,
                entryValue: entry.value
            }).catch(error => {
                console.error(error);
            });
        })
    }).catch(error => {
        console.error(error);
    });
});
