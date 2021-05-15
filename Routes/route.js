const express = require("express");
const peoples = require("../Controller/controller");
const router = express.Router();

router.get("/", peoples.getting);

module.exports = router;
// const exporter = (req, res) => {
//   res.send("We are now connected to the new universe");
// };
// module.exports = {
//   exporter,
// };
