// doc: https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments
// curl --location 'https://apigee.googleapis.com/v1/organizations/chi-integration-layer/environments?key=AIzaSyCS1yls3M_WGKzN-fPwDIF-qebFnlwE7mA' \
// --header 'Authorization: Bearer ya29.a0AXooCgstdsVX5bnJerp1U8LMFRMG3KSfGydspBW6yHB3KVQmIMULtI0qQ2B2kipA9FnziFkmdEuuuP4B9dO0IeTdU3BzIWqXbwKE8d9Z6WZN2lIFZbAqIDmE8YObsfK95oCdLUSSzhPjrZi_uPbPjoesnwbW4pOVKhwaCgYKAUwSARESFQHGX2Mib4OzKrgA4ijgFKzou9BOEw0170'
let list = (conn) => {
    let options = {
        method: 'GET',
        url: `https://apigee.googleapis.com/v1/organizations/${conn.org}/environments?key=${conn.API_KEY}`,
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
   list
};