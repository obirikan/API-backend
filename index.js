const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Product= require('./model/friends2.jsx')
const Category= require('./model/friends.jsx')
const cors=require('cors')
require('dotenv').config() 

app.use(cors())
app.use(express.json())

// View all products
app.get('/viewProducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new product
app.post('/addProduct', async (req, res) => {
  try {
    const { productName, productDesc, productCategory, productPrice, productImage } = req.body;
    const product = new Product({
      productName,
      productDesc,
      productCategory,
      productPrice,
      productImage
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a product
app.delete('/deleteProduct/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).send({ message: 'Product not found.' });
    } else {
      res.send({ message: 'Product deleted successfully.' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a product
app.put('/updateProduct/:id', async (req, res) => {
  try {
    const { productName, productDesc, productCategory, productPrice, productImage } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName,
        productDesc,
        productCategory,
        productPrice,
        productImage
      },
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).send({ message: 'Product not found.' });
    } else {
      res.send(updatedProduct);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//CATEGORY SECTION

// View all categories
app.get('/viewCategories', async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new category
app.post('/addCategory', async (req, res) => {
  try {
    const { categoryName, categoryDesc, categoryImage } = req.body;
    const category = new Category({
      categoryName,
      categoryDesc,
      categoryImage
    });
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a category
app.delete('/deleteCategory/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      res.status(404).send({ message: 'Category not found.' });
    } else {
      res.send({ message: 'Category deleted successfully.' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a category
app.put('/updateCategory/:id', async (req, res) => {
  try {
    const { categoryName, categoryDesc, categoryImage } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        categoryName,
        categoryDesc,
        categoryImage
      },
      { new: true }
    );
//DATABASE____CONNECTION
mongoose.connect('mongodb+srv://kelvin:salvation22@cluster0.iaa1e.mongodb.net/afram',{
    useNewUrlParser:true
})
const port=process.env.PORT || 5000

app.listen(process.env.PORT || 5000,()=>{
    console.log(`connection is running on ${port}`)
})
