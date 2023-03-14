const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@constant": path.resolve(__dirname, "_constants/"),
      "@util": path.resolve(__dirname, "_utils/"),
      "@route": path.resolve(__dirname, "_routes/"),
      "@button": path.resolve(__dirname, "components/buttons/"),
      "@field": path.resolve(__dirname, "components/fields/"),
      "@crud": path.resolve(__dirname, "components/Layouts/Private/CRUD/")
    }
  }
};
