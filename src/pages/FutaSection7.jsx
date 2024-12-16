import image from '../assets/images/section7.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css'

export default function FutaSection7() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={image}  />
    </div>
  );
}