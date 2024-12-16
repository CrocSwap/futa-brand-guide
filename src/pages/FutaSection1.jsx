import ImageDisplay from '../components/ImageDisplay/ImageDisplay';
import image from '../assets/images/section1.svg';
import styles from './Sections.module.css'

export default function FutaSection1() {
  return (
    <div className={styles.section1bg} >

      <ImageDisplay image={image} />
    </div>
  );
}
