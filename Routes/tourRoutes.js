const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliaseTopTours,
  // checkBody,
} = require('../controllers/toursController');

const router = express.Router();

// router.param('id', checkID);

router.route('/top-5-tours').get(aliaseTopTours, getAllTours);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
