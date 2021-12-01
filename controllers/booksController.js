import Books from "../models/Books.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksById = async (req, res) => {
  try {
    const books = await Books.findById(req.params.id);
    res.json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveBooks = async (req, res) => {
  const books = new Books(req.body);
  try {
    const saveBooks = await books.save();
    res.status(201).json(saveBooks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBooks = async (req, res) => {
  const cekId = await Books.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const updateBooks = await Books.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateBooks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBooks = async (req, res) => {
  const cekId = await Books.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const deleteBooks = await Books.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteBooks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
