import PropTypes from 'prop-types';
import styles from './ImageDisplay.module.css';
import { BsDownload } from 'react-icons/bs';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import fullLogo from '../../assets/images/section2Image.svg';
import markColor from '../../assets/images/section3Image.svg';
import markMonochrome01 from '../../assets/images/section4FirstImage.svg';
import markMonochrome02 from '../../assets/images/section4SecondImage.svg';
import wordMarkColor from '../../assets/images/section5Image.svg';
import wordMarkMonochrome01 from '../../assets/images/section6FirstImage.svg';
import wordMarkMonochrome02 from '../../assets/images/section6SecondImage.svg';
import wordColor from '../../assets/images/section7Image.svg';
import wordMonochrome01 from '../../assets/images/section8FirstImage.svg';
import wordMonochrome02 from '../../assets/images/section8SecondImage.svg';
export default function ImageDisplay(props) {
  const { image, image2, zipDownload } = props;

  const images = [
    { name: 'fullLogo.svg', url: fullLogo },
    { name: 'markColor.svg', url: markColor },
    { name: 'markMonochrome01.svg', url: markMonochrome01 },
    {
      name: 'markMonochrome02.svg',
      url: markMonochrome02,
    },
    {
      name: 'wordMarkColor.svg',
      url: wordMarkColor,
    },
    {
      name: 'wordMarkMonochrome01.svg',
      url: wordMarkMonochrome01,
    },
    {
      name: 'wordMarkMonochrome02.svg',
      url: wordMarkMonochrome02,
    },
    {
      name: 'wordColor.svg',
      url: wordColor,
    },
    {
      name: 'wordMonochrome01.svg',
      url: wordMonochrome01,
    },
    {
      name: 'wordMonochrome02.svg',
      url: wordMonochrome02,
    },
  ];

  const downloadZip = async () => {
    const zip = new JSZip();

    for (const image of images) {
      try {
        const response = await fetch(image.url); // Fetch the imported image's URL
        const blob = await response.blob();
        zip.file(image.name, blob);
      } catch (error) {
        console.error(`Failed to load image ${image.name}:`, error);
      }
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'BrandKit.zip');
    });
  };

  // Function to download an image
  const downloadImage = (src, filename) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = src;
    link.download = filename || 'downloaded-image';

    // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to generate filename
  const generateFilename = (src) => {
    // Extract filename from URL or use a default
    const urlParts = src.split('/');
    return urlParts[urlParts.length - 1] || 'brand-image';
  };

  if (image2) {
    return (
      <div className={styles.main_dual}>
        <div className={styles.content}>
          <img src={image} alt='' className={styles.img1} />
          <button
            className={styles.downloadButton}
            onClick={() => downloadImage(image, generateFilename(image))}
          >
            download
            <BsDownload />
          </button>
        </div>

        <div className={styles.content}>
          <img src={image2} alt='' className={styles.img2} />
          <button
            className={styles.downloadButton}
            onClick={() => downloadImage(image, generateFilename(image))}
          >
            download
            <BsDownload />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <img src={image} alt='' />
        <button
          className={styles.downloadButton}
          onClick={
            zipDownload
              ? () => downloadZip() // Pass a function reference
              : () => downloadImage(image, generateFilename(image)) // Pass a function reference
          }
        >
          download
          <BsDownload />
        </button>
      </div>
    </div>
  );
}

ImageDisplay.propTypes = {
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  zipDownload: PropTypes.boolean,
};
