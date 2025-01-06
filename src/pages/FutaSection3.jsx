import section3 from '../assets/images/section3Image.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection3() {
  return (
    <div className={styles.main}>
      <div className={styles.mainColumn}>
        <p>Mark / Color</p>
        <ImageDisplay image={section3} imageName={'markColor'} />
      </div>
    </div>
  );
}
