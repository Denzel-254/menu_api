const MenuItem = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  const menu = await MenuItem.find({ available: true });
  res.json(menu);
};

exports.addMenuItem = async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
};
