import mongoose from "mongoose";

const Books = mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  pengarang: {
    type: String,
    required: true,
  },
  penerbit: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Books", Books);
