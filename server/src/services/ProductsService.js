const Error = require("../middlewares/Error");
const DiskStorage = require("../providers/DiskStorage");

class ProductsService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async create({ name, description, price, ingredients }) {
    if (!name || !description || !price || !ingredients) {
      throw new Error("Mandatory field's not informed");
    }

    let parsedIngredients = "";

    if (ingredients.length > 0) {
      ingredients.map((item) => {
        parsedIngredients = parsedIngredients + item + ",";
      });

      parsedIngredients = parsedIngredients.slice(
        0,
        parsedIngredients.length - 1
      );
    }

    const productExists = await this.productsRepository.findByName({ name });

    if (productExists) {
      throw new Error("Product name already used");
    }

    return await this.productsRepository.create({
      name,
      description,
      price,
      ingredients: parsedIngredients,
    });
  }

  /*async updateImage({ id, image }) {
    const diskStorage = new DiskStorage();

    const product = await this.productsRepository.findById({ id });

    if (!product) {
      throw new Error("Can't find image to update", 401);
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
  }*/
}

module.exports = ProductsService;
