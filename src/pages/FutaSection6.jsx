import section6First from '../assets/images/section6First.svg';
import section6Second from '../assets/images/section6Second.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection6() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={section6First} image2={section6Second} />
    </div>
  );
}
