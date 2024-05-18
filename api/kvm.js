// doc: https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments.keyvaluemaps
let create = (conn,env,kvmName) => {
    console.log("Creating KVM...\r\n");
    let options = {
        method: 'POST',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments/${env ?? conn.env}/keyvaluemaps?key=${conn.API_KEY}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${conn.ACCESS_TOKEN}`
        },
        body: {
            name: kvmName,
            encrypted: false
        }
    };

    return fetch(options.url, {
        ...options,
        body: JSON.stringify(options.body)
    })
    .then(response => response.json());
}

let remove = (conn, env,kvmName) => {
    let options = {
        method: 'DELETE',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments/${env ?? conn.env}/keyvaluemaps/${kvmName}?key=${conn.API_KEY}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${conn.ACCESS_TOKEN}`
        }
    };

    return fetch(options.url, options)
    .then(response => response.json());
}

let list = (conn, env) => {
    let options = {
        method: 'GET',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments/${env ?? conn.env}/keyvaluemaps?key=${conn.API_KEY}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${conn.ACCESS_TOKEN}`
        }
    };
    console.log(options.url);

    return fetch(options.url, options)
    .then(response => response.json());
}
// Export the functions or values you want to make available outside the module
module.exports = {
   create, remove, list
};