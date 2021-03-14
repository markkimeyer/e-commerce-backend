// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',

});
// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  foreignKey: 'tag_id',
 
});
// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  foreignKey: 'tag_id',

});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
