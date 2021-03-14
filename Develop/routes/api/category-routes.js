const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint




router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: product }],
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Sorry, no category found with that id!' });
      return;
    }

    res.status(200).json(CategorydData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
    try {
      const CategoryData = await Category.create(req.body);
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
