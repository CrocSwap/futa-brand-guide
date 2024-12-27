import image from '../assets/images/section4First.svg';
import image2 from '../assets/images/section4Second.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection4() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={image} image2={image2} />
    </div>
  );
}
