// to get "API_KEY", go to https://console.cloud.google.com/apis/credentials
// to get "ACCESS_TOKEN", run this command in terminal: gcloud auth login && gcloud auth print-access-token
const conn = {
    org: "chi-integration-layer",
    env: "default-chi-development",
    API_KEY: "",
    ACCESS_TOKEN: ""
};

module.exports = conn;