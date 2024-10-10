import Product from "../models/product.js";

const getAllProductsStatic = async (req, res) => {
  const product = await Product.find({ price: { $gt: 30 } })
    .select("price")
    .sort("price");
  await res.status(200).json({ product, nbHits: product.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, select, numericFilter } = req.query;

  // filter
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // range
  if (numericFilter) {
    const operatorMap = {
      ">": "$gt",
      "<": "$lt",
      "=": "$eq",
      ">=": "$gte",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|=|>=|<=)\b/g;
    const filter = numericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filter.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  //sort
  let result = Product.find(queryObject);
  if (sort) {
    let sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  //select
  if (select) {
    let selectList = select.split(",").join(" ");
    result = result.select(selectList);
  }

  //pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10; //items displayed
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const products = await result;
  await res.status(200).json({ products, nbHits: products.length });
};

export { getAllProducts, getAllProductsStatic };
