import section4First from '../assets/images/section4FirstImage.svg';
import section4Second from '../assets/images/section4SecondImage.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection4() {
  return (
    <div className={styles.main} >

          <ImageDisplay image={section4First} image2={section4Second} />
    </div>
  );
}
