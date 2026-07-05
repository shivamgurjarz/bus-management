// Bus Controller - Placeholder for future implementation

const getAllBuses = (req, res) => {
  res.json({ message: 'Get all buses' });
};

const getBusById = (req, res) => {
  res.json({ message: 'Get bus by ID' });
};

const createBus = (req, res) => {
  res.json({ message: 'Create new bus' });
};

const updateBus = (req, res) => {
  res.json({ message: 'Update bus' });
};

const deleteBus = (req, res) => {
  res.json({ message: 'Delete bus' });
};

module.exports = {
  getAllBuses,
  getBusById,
  createBus,
  updateBus,
  deleteBus
};
