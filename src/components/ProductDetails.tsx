import { Link, useParams } from 'react-router-dom';

import ProductData from '../mock/ProductData';

import Back from '../assets/back.svg';

import Styles from '../styles/components/ProductDetails.module.css';

export const ProductDetails = () => {
  const { itemId } = useParams();
  const thisProduct = ProductData.find((item) => item.id === itemId);

  return (
    <div className={Styles.container}>
      <div className={Styles.titleContainer}>
        <Link to="/">
          <img src={Back} alt="Back Icon" />
        </Link>
        <h1>Caneca do Zequinha</h1>
      </div>

      <div className={Styles.content}>
        <div className={Styles.imageContainer}>
          <img src={thisProduct?.imageUrl} alt={thisProduct?.imageAlt} width="100px" />
        </div>

        <div className={Styles.blockContainer}>
          <div className={Styles.offerContainer}>
            <div className={Styles.tagContainer}>
              <text>{thisProduct?.tag}</text>
            </div>
            <div className={Styles.priceContainer}>
              <div className={Styles.price}>
                <text>{thisProduct?.price}</text>
              </div>
              <div className={Styles.installmentsContainer}>
                <text>{thisProduct?.installments}</text>
              </div>
            </div>
            <div className={Styles.stripe}></div>
          </div>

          <h2>Descrição</h2>
          <div className={Styles.descriptionContainer}>
            <text>{thisProduct?.description}</text>
          </div>

          <h2>Detalhes do Produto</h2>
          <div className={Styles.detailsContainer}>
            <ul>
              <li>Categoria: {thisProduct?.category}</li>
              <li>Tamanho: {thisProduct?.size}</li>
              <li>Marca: {thisProduct?.brand}</li>
              <li>Peso: {thisProduct?.weight}</li>
              <li>Material: {thisProduct?.material}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
