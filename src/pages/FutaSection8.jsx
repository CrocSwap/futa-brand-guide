import section8First from '../assets/images/section8FirstImage.svg';
import section8Second from '../assets/images/section8SecondImage.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection8() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={section8First} image2={section8Second} />
    </div>
  );
}
