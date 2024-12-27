import section5 from '../assets/images/section5Image.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection5() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={section5}  />
    </div>
  );
}
