const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");

class ProductsService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async create({ name, description, price, ingredients, category }) {
    if (!name || !description || !price || !ingredients || !category) {
      throw new Error("Mandatory field's not informed");
    }

    let parsedIngredients = "";

    if (ingredients.length > 0) {
      ingredients.map((item) => {
        parsedIngredients = parsedIngredients + item.toLowerCase() + ",";
      });

      parsedIngredients = parsedIngredients.slice(
        0,
        parsedIngredients.length - 1
      );
    }

    const parsedName = name.toLowerCase();

    const productExists = await this.productsRepository.findByName({
      name: parsedName,
    });

    if (productExists) {
      throw new Error("Product already used");
    }

    return await this.productsRepository.create({
      name: parsedName,
      description,
      price,
      ingredients: parsedIngredients,
      category: category.toLowerCase(),
    });
  }

  async updateImage({ id, image }) {
    const diskStorage = new DiskStorage();

    const product = await this.productsRepository.findById({ id });

    if (!product) {
      throw new Error("Can't find product", 401);
    }

    if (product.image) {
      await diskStorage.deleteFile(product.image);
    }

    const filename = await diskStorage.saveFile(image);

    product.image = filename;

    const updatedProduct = await this.productsRepository.updateImage({
      id,
      image: product.image,
    });
    return updatedProduct;
  }
}

module.exports = ProductsService;
