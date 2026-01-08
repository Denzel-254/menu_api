const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");

exports.createOrder = async (req, res) => {
  const { items } = req.body;

  let total = 0;

  for (let item of items) {
    const menuItem = await MenuItem.findById(item.menuItem);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    total += menuItem.price * item.quantity;
  }

  const order = await Order.create({
    items,
    totalAmount: total,
  });

  res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("items.menuItem");
  res.json(orders);
};
