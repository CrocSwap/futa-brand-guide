import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import image from '../assets/images/section3.svg';
import styles from './Sections.module.css'

export default function FutaSection3() {
  return (
    <div className={styles.main} >

      <ImageDisplay image={image} />
    </div>
  );
}
