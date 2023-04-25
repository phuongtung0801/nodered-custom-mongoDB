const mongoose = require('mongoose');

const SiteNameIDMapSchema = new mongoose.Schema({
  site_name: {
    type: String,
    required: true,
    unique: true
  },
  site_label: {
    type: String,
    required: true
  }
});

const SiteNameIDMap = mongoose.model('SiteNameIDMap', SiteNameIDMapSchema);

module.exports = SiteNameIDMap;

