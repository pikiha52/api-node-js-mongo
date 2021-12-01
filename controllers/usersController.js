import Users from "../models/Users.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUsers = async (req, res) => {
  const users = new Users(req.body);
  const salt = await bcrypt.genSalt(10);
  users.password = await bcrypt.hash(users.password, salt);
  try {
    const saveUsers = await users.save();
    res.status(201).json(saveUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  const cekId = await Users.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const updateUsers = await Users.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  const cekId = await Users.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const deleteUsers = await Users.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
