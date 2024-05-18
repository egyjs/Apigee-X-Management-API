// doc: https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments.targetservers
let list = (conn) => {
    let options = {
        method: 'GET',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments/${conn.env}/targetservers?key=${conn.API_KEY}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${conn.ACCESS_TOKEN}`
        }
    };

    return fetch(options.url, options)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error.message);
            }
            return data;
        });
}

let get = (conn,tsName) => {
    let options = {
        method: 'GET',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments/${conn.env}/targetservers/${tsName}?key=${conn.API_KEY}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${conn.ACCESS_TOKEN}`
        }
    };

    return fetch(options.url, options)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error.message);
            }
            return data;
        });
}

// Export the functions or values you want to make available outside the module
module.exports = {
   list, get
};