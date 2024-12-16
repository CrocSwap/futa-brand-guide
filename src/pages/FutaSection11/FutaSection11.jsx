import styles from './FutaSection11.module.css'
import image1 from '../../assets/images/space1.png'
import image2 from '../../assets/images/space2.png'
import image3 from '../../assets/images/space3.png'
export default function FutaSection11() {
    
    return (
        <div className={styles.main}>

            
            <div className={styles.content}>
                <img src={image1} alt="" className={styles.img1}/>
                <div className={styles.contentColumn}>
                    <img src={image2} alt="" className={styles.img2} />
                <img src={image3} alt="" className={styles.img2} />


                </div>

            </div>
        </div>
    )
}