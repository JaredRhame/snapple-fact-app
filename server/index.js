const express = require("express");
const cors = require("cors");
const monk = require("monk");
const app = express();
const Filter = require("bad-words");
const rateLimit = require("express-rate-limit");
var router = express.Router();
var { generateToken, sendToken } = require("./utils2/token.utils.js");
var passport = require("passport");
var config = require("./config");
require("./passport")();

const dbURL =
  "mongodb://Zinoh:YmXiaG7B2y2jd98@ds131902.mlab.com:31902/snapple-facts";
const db = monk(dbURL);
// Collection in DB
const facts = db.get("facts");
// const userDB = db.get("users");

const filter = new Filter();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "snapples are awesome"
  });
  console.log(res.json);
});
// Retrieves facts from db
app.get("/facts", (req, res) => {
  //.find() empty grabs everything
  facts.find().then(facts => {
    res.json(facts);
  });
});

router.route("/auth/google").post(
  passport.authenticate("google-token", { session: false }),

  function(req, res, next) {
    // const googleUser = {
    //   id: req.user.id
    // };
    if (!req.user) {
      return res.send(401, "User Not Authenticated");
    }
    req.auth = {
      id: req.user.id
    };
    // userDB.insert(googleUser).then(createdUser => {
    //   res.json(createdUser);
    // });
    next();
  },
  generateToken,
  sendToken
);

// module.exports = router;
//Makes sure that every submission has a factNumber and factContent
function isValidFact(fact) {
  return (
    fact.factNumber &&
    fact.factNumber.toString().trim() !== "" &&
    fact.fact &&
    fact.fact.toString().trim() !== ""
  );
}
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000, //5 minutes
    max: 10 //Limit each IP to 100 requests per windowMs
  })
);
app.post("/facts", (req, res) => {
  //To prevent injection, turns everything into a string
  const fact = {
    factNumber: filter.clean(req.body.factNumber.toString()),
    factContent: filter.clean(req.body.fact.toString()),
    created: new Date()
  };

  if (isValidFact(req.body)) {
    //insert in db
    facts.insert(fact).then(createdFact => {
      res.json(createdFact);
    });
  } else {
    res.status(422);
    res.json({
      message: "Hey! Fact Number and Fact Content are required!"
    });
  }
});

app.listen(5000, () => {
  console.log("Listening on Server http://localhost:5000");
});

// live timestamp https://youtu.be/JnEH9tYLxLk?t=31m35s
