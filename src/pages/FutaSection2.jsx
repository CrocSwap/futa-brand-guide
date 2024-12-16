import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import image from '../assets/images/section2.png';
import styles from './Sections.module.css'

export default function FutaSection2() {
  return (
    <div className={styles.main} >

      <ImageDisplay image={image} />
    </div>
  );
}
