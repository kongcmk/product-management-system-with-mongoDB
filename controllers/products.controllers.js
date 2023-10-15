const Product = require("../models/product");

// All products
exports.getProducts = async (req, res) => {
  try {
    const productsData = await Product.find({});
    res.status(200).json(productsData); // Change status to 200 OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Single product with ObjectId --> _id:
exports.getProduct = async (req, res) => {
  const reqId = req.params.id
  try {
    const productData = await Product.findById(reqId);

    if (!productData) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add product
exports.addProduct = async (req, res) => {
  const reqData = req.body;

  try {
    if (!reqData) {
      return res.status(400).json({ error: "Product data is missing" });
    }

    const newProduct = new Product(reqData);

    // Validate the new product
    const validationError = newProduct.validateSync();

    if (validationError) {
      const errors = Object.values(validationError.errors).map((error) => error.message);
      return res.status(400).json({ error: errors });
    }

    const existingProduct = await Product.findOne({ id: reqData.id})

    if (existingProduct) {
      return res.status(400).json({ error : "Product ID already exists" })
    }

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct); // Change status to 201 Created
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Edit product
exports.editProduct = async (req, res) => {
    const reqId = req.params.id
    const updateData = req.body

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            reqId,
            {$set: updateData, updated_at: Date.now()},
            {new: true}
        )
        if (!updatedProduct) {
            return res.status(404).json({error : "Product not found"})
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Sever Error"});
    }
};


exports.deleteProduct = async (req, res) => {
  const reqId = req.params.id
  try {
    const deleteData = await Product.findByIdAndDelete(reqId);
    if (!deleteData) {
      return res.status(404).json({Error : "Product not found"})
    }

    res.status(200).json('ID : ' + reqId + ' is delete successfully')
  } catch (error){
    console.error(error);
    res.status(500).json({error: "Internal Server Error"})
  }
}

