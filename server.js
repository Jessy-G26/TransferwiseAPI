const express = require("express");
const app = express();
const port = 8012;
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const gatewayToken = process.env.GATEWAY_TOKEN;
const base = process.env.WISE_URL;

const params = {
  client_id: client_id,
  client_secret: client_secret,
};

async function getToken() {
  try {
    const resp = await axios.post(base + "/oauth/token", params, {
      headers: {
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    // console.log(resp.data);
    return await resp.data["access_token"];
  } catch (err) {
    console.error(err);
  }
}

//GET ACCESS TOKEN API
app.get("/token", async (req, res) => {
  try {
    const resp = await axios.post(base + "/oauth/token", params, {
      headers: {
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(resp.data);
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
});

//Create User Account
app.post("/users", async (req, res) => {
  try {
    const apiToken = await getToken();
    // console.log(apiToken);
    const user = await axios.post(base + "/accounts", req.body, {
      headers: {
        Authorization: "Bearer " + apiToken,
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(user.data);
    console.log(user.data);
    // console.log(await getToken());
  } catch (error) {
    console.log(error);
  }
});

//Create Profile
app.post("/profiles", async (req, res) => {
  try {
    const apiToken = await getToken();
    const newBody = req.body;
    console.log(newBody);
    // console.log(apiToken);
    const user = await axios.post(base + "/profiles", newBody, {
      headers: {
        Authorization: "Bearer " + apiToken,
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(user.data);
    console.log(user.data);
    // console.log(await getToken());
  } catch (error) {
    console.log(error);
  }
});

// Create Quote
app.post("/quotes", async (req, res) => {
  try {
    const apiToken = await getToken();
    const newBody = req.body;
    console.log(newBody);
    // console.log(apiToken);
    const user = await axios.post(base + "/quotes", newBody, {
      headers: {
        Authorization: "Bearer " + apiToken,
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(user.data);
    console.log(user.data);
    // console.log(await getToken());
  } catch (error) {
    console.log(error);
  }
});

// Create Recipient
app.post("/recipients", async (req, res) => {
  try {
    const apiToken = await getToken();
    const newBody = req.body;
    console.log(newBody);
    // console.log(apiToken);
    const user = await axios.post(base + "/recipients", newBody, {
      headers: {
        Authorization: "Bearer " + apiToken,
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(user.data);
    console.log(user.data);
    // console.log(await getToken());
  } catch (error) {
    console.log(error);
  }
});

//Create Transaction
app.post("/transfers/prepare", async (req, res) => {
  try {
    const apiToken = await getToken();
    const newBody = req.body;
    console.log(newBody);
    // console.log(apiToken);
    const user = await axios.post(base + "/transfers/prepare", newBody, {
      headers: {
        Authorization: "Bearer " + apiToken,
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(user.data);
    console.log(user.data);
    // console.log(await getToken());
  } catch (error) {
    console.log(error);
  }
});

//Execute Transaction
app.post("/transfers/proceed", async (req, res) => {
  try {
    const apiToken = await getToken();
    const newBody = req.body;
    console.log(newBody);
    // console.log(apiToken);
    const user = await axios.post(base + "/transfers/proceed", newBody, {
      headers: {
        Authorization: "Bearer " + apiToken,
        "X-Perahub-Gateway-Token": gatewayToken,
        "Content-Type": "application/json",
      },
    });
    res.send(user.data);
    console.log(user.data);
    // console.log(await getToken());
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`My App listening on port ${port}!`));
