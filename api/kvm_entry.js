let create = ({conn,kvmName,entryName,entryValue}) => {
    // if (!kvmName) {
    //     console.error("KVM name is required.");
    //     return;
    // }
    console.log(`Creating KVM Entry (${entryName})...\r\n`);
    let options = {
        method: 'POST',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments/${conn.env}/keyvaluemaps/${kvmName}/entries?key=${conn.API_KEY}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${conn.ACCESS_TOKEN}`
        },
        body: {
            name: entryName,
            value: entryValue
        }
    };

    return fetch(options.url, {
        ...options,
        body: JSON.stringify(options.body)
    })
    .then(response => response.json());
}

// Export the functions or values you want to make available outside the module
module.exports = {
   create
};