// Internal card data is NOT defined here!

import styles from './Card.module.css';

type CardProps = {
  // A structure of any card
  title: String;
  text: String;
};

// To use local styles we use className inside Card.module.css
function CardComponent({ title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.card}>{title}</h3>
      <p className={styles.card}>{text}</p>
    </div>
  );
}

export default CardComponent;
