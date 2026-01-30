// Internal section data is NOT defined here!

import styles from './Section.module.css';
import CardComponent from '../Card/Card';

type CardData = {
  // A structure of any card
  title: String;
  text: String;
};

type SectionProps = {
  // An array of cards that contains previos structure
  title: String;
  cards: CardData[];
};

function SectionComponent({ cards, title }: SectionProps) {
  return (
    <div className={styles.section}>
      <h3 className={styles.section}>{title}</h3>
      {cards.map((card, index) => (
        <CardComponent key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
}

export default SectionComponent;
