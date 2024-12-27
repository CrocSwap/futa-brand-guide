import section1image from '../assets/images/section1Image.svg';
import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import styles from './Sections.module.css';

export default function FutaSection1() {
  return (
    <div className={styles.section1bg} >

      <ImageDisplay image={section1image} />
    </div>
  );
}
