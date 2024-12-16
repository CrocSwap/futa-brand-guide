import PropTypes from 'prop-types';
import styles from './ImageDisplay.module.css';
import { BsDownload } from 'react-icons/bs';

export default function ImageDisplay(props) {
  const { image, image2 } = props;
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
          onClick={() => downloadImage(image, generateFilename(image))}
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
};
