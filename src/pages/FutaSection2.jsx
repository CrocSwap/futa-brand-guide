import section2 from '../assets/images/section2Image.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection2() {
  return (
    <div className={styles.main} >

      <ImageDisplay image={section2} />
    </div>
  );
}
