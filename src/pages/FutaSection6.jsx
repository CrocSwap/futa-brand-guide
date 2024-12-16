import image from '../assets/images/section6First.svg';
import image2 from '../assets/images/section6Second.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css'

export default function FutaSection6() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={image} image2={image2} />
    </div>
  );
}
