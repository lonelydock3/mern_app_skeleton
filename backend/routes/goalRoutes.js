const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

//read or create
router.route('/').get(protect, getGoals).post(protect, setGoal)

// // read
// router.get('/', getGoals)
// 
// // create
// router.post('/', setGoal)

// update or delete
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

// // update
// router.put('/:id', updateGoal)
// 
// //delete
// router.delete('/:id', deleteGoal)


module.exports = router
