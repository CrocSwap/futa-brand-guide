import section7 from '../assets/images/section7Image.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection7() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={section7}  />
    </div>
  );
}
