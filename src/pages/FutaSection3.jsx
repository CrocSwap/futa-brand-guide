import section3 from '../assets/images/section3.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection3() {
  return (
    <div className={styles.main} >

      <ImageDisplay image={section3} />
    </div>
  );
}
