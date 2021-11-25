import { ProductsCard } from '../components/ProductCard';
import Styles from '../styles/components/Home.module.css';

export function Home() {
  return (
    <div className={Styles.container}>
      <h1>Produtos em Promoção</h1>
      <ProductsCard color={Styles.stripe} />
      <h1>Últimas Novidades</h1>
      <ProductsCard color={Styles.stripeGreen} />
    </div>
  );
}
