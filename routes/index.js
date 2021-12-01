import express from "express";

import {
  getUsers,
  getUsersById,
  saveUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/usersController.js";

import {
    getBooks,
    getBooksById,
    saveBooks,
    updateBooks,
    deleteBooks,
} from "../controllers/booksController.js";

const router = express.Router();

// *** USERS *** // 
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users/', saveUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

// *** BOOKS *** //
router.get('/books', getBooks);
router.get('/books/:id', getBooksById);
router.post('/books/', saveBooks);
router.patch('/books/:id', updateBooks);
router.delete('/books/:id', deleteBooks)

export default router;