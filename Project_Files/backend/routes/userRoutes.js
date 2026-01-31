import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserStatus,
  deleteUser,
  exportToCSV
} from '../controllers/userController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Export to CSV
router.get('/export/csv', exportToCSV);

// CRUD routes
router.post('/', upload.single('profile'), createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', upload.single('profile'), updateUser);
router.patch('/:id/status', updateUserStatus);
router.delete('/:id', deleteUser);

export default router;
