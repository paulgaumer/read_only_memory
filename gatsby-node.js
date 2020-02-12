// ******
// gatsby-node by default doesn't allow ES6 features such as "import". We redirect it to gatsby-node.esm.js configured to allow these features.
// ******

require = require("esm")(module)
module.exports = require("./gatsby-node.esm.js")
