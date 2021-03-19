const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint




router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log("THIS IS BROKEN", err);
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Sorry, no category found with that id!' });
      return;
    }

    res.status(200).json(categorydData);
  } catch (err) {
    console.log("category by id is broken", err);
    res.status(500).json(err);
  
  }
});


router.post('/', async (req, res) => {
  try {
    //the req.body is coming from the postman body
    const categoryData = await Category.create(req.body);
    //json of what sequelize/postman returns
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }
    );
    if (!categoryData) {
      res.status(404).json({ message: "Sorry, no category found with that id!" })
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    }
    );
    if (!categoryData) {
      res.status(404).json({ message: "Sorry, no category found with that id!" })
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
