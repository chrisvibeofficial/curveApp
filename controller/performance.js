const { employeperformance } = require('../models');

exports.createPerformance = async (req, res) => {
  try {
    const date = new Date
    const {employeeId} = req.params;
    const {rating} = req.body;
    const punctuality = date.toLocaleDateString()
    //  const checkEmployee = await employeperformance.findByPk(employeeId)

    //  if (!checkEmployee) {
    //   return res.status(404).json({message: 'Employee not found'});
    //  }
     const data = {
      employeeId,
      rating: rating +'%',
      punctuality: punctuality
     }
     const employeePerformance = await employeperformance.create(data);
     res.status(201).json({
      message: 'Employee performance created successfully',
      data: employeePerformance
     })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}