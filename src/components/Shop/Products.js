import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: '1', price: 200, title: 'The FIRST PRODUCT ', description: 'FIRST PRODUCT ADDED'
  },
  {
    id: '2', price: 500, title: 'The SECOND PRODUCT ', description: 'SECOND PRODUCT ADDED'
  }]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
