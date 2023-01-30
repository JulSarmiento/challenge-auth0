class ProductController {
  constructor() {}

  getAll(_req, res) {
    res.status(200).json([]);  
  }

  getById(_req, res) {
    res.status(200).json({});
  }

  create(_req, res) {
    res.status(201).json({});
  }

  update(_req, res) {
    res.status(200).json({});
  }

  delete(_req, res) {
    res.status(204).json({});
  }

  deleteById(_req, res) {
    res.status(204).json({});
  }
}

module.exports = new ProductController();