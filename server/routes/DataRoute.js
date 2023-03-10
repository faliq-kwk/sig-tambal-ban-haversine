const express = require ('express')

const { 
     getUsers, 
     getUserById,
     saveUser,
     updateUser,
     deleteUser
 } = require ("../controllers/DataController.js")
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', saveUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router