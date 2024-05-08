/**
 * Made by: <AbdulRahman El-zahaby>
 * use this script to get all target servers in your account (check conn.js for more details)
 * 
 * Usage:
 * node examples/get-all-target-servers.js -o tmp/targetservers.json
 */
const conn = require('../api/conn.js');
const ts = require('../api/ts.js'); 
const { log } = require('console');
const { program } = require('commander');
const fs = require('fs');

program
    .name('get-all-target-servers')
    .description('Get all target servers in your account')
    .option('-o, --output <file>', 'output file (default: stdout)');


program.parse();


const options = program.opts();
async function main() {
    try {
        let list = await ts.list(conn);
        
        if (!list || list.length === 0) {
            log('No target servers found');
            return;
        }

        // Use Promise.all to wait for all async operations inside map to complete
        let tsDetailsArray = await Promise.all(
            list.map(async (tsName) => {
                let tsDetails = await ts.get(conn, tsName);
                return tsDetails;
            })
        );
        let data = JSON.stringify(tsDetailsArray, null, 2); 
        if (options.output) {
            fs.writeFileSync(options.output, data);
            log(`Data written to "${options.output}"`);
            return;
        }
        log(data);
    } catch (error) {
        console.error(error);
    }
}

main();
