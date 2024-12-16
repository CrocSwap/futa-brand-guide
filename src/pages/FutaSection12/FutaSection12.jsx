import styles from './FutaSection12.module.css';
import image1 from '../../assets/images/Section12First.svg'
import image2 from '../../assets/images/Section12Second.svg'
export default function FutaSection12() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>
          1. Don’t modify the geometry of the logo. Don’t skew, rotate, angle, or
          otherwise affect the proportions.
              </h3>
              <img src={image1} alt="" />
      </div>

      <div className={styles.content}>
        <h3>
         2. Don’t change the color of the logo. Use the colored version supplied, or the monochromatic versions.
              </h3>
              <img src={image2} alt="" />
      </div>
    </div>
  );
}
