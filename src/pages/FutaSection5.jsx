import section5 from '../assets/images/section5Image.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection5() {
  return (
    <div className={styles.main} >
   <div className={styles.mainColumn}>
   <p>Wordmark / Color</p>
        <ImageDisplay image={section5} imageName='wordMarkColor' />
        </div>
    </div>
  );
}
