import { Link } from 'react-router-dom';
import ProductData from '../mock/ProductData';
import Styles from '../styles/components/ProductCard.module.css';

type Props = {
  color: any;
};

export const ProductsCard = ({ color }: Props) => {
  console.log(ProductData);
  const listItems = ProductData.map((item) => (
    <div className={Styles.container} key={item.id}>
      <div className={Styles.content}>
        <div className={Styles.imageContainer}>
          <img src={item.imageUrl} alt={item.imageAlt} width="100px" />
        </div>

        <div className={Styles.titleContainer}>
          <Link className={Styles.link} to={`/products/${item.id}`}>
            {item.title}
          </Link>
        </div>

        <div className={Styles.priceContainer}>
          <text>{item.price}</text>
        </div>

        <div className={Styles.installmentContainer}>
          <text>{item.installments}</text>
        </div>
        <div className={color}>
          <p>Promoção</p>
        </div>
      </div>
    </div>
  ));
  return <div className={Styles.container}>{listItems}</div>;
};
