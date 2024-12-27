import PropTypes from 'prop-types'; // Import PropTypes
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Footer.module.css';

export default function Footer(props) {
  const { scrollToSection, activeSection } = props;
  const titles = {
    0: { title: '' },
    1: { title: '' },
    2: { title: 'MARK / Color' },
    3: { title: 'MARK / Monochrome' },
    4: { title: 'WORDMARK / Color' },
    5: { title: 'WORDMARK / Monochrome' },
    6: { title: 'WORD / Color' },
    7: { title: 'WORD / Monochrome' },
    8: { title: 'COLOR PALETTE (Click to copy)' },
    9: { title: 'TYPOGRAPHY' },
    10: { title: 'CLEAR SPACE' },
    11: { title: 'DOS and DONTS' },
  };
  const selectedTitle = titles[activeSection]?.title || '';

  const sections = ['00', '01', '02', '03', '04'];

  const handleNextSection = () => {
    const nextIndex = (activeSection + 1) % sections.length;
    scrollToSection(nextIndex);
  };
  const showMobileVersion = useMediaQuery('(max-width: 768px)');

  const futaText = (
    <div className={styles.centerSection}>
      <div className={styles.mainText}>
        <span className={styles.fuText}>FU</span>
        <span>/</span>
        <span className={styles.taText}>TA</span>
      </div>
      <div className={styles.enterButton}>{selectedTitle}</div>
    </div>
  );

  return (
    <div className={styles.container} tabIndex={0}>
      <div className={styles.leftSection}>
        <div className={styles.verticalText}>
          FULLY UNIVERSAL TICKER AUCTION
        </div>
        <div className={styles.desktopFuta}>{futaText}</div>
      </div>
 

      <div className={styles.rightSection}>
              <div className={styles.numberList}>
                  {activeSection === 0 && 'Last Updated:'}
          {activeSection > 2 && activeSection < 10 ? '0' : ''}
          {activeSection > 2 && activeSection}
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  activeSection: PropTypes.number.isRequired,
};

Footer.defaultProps = {
  activeSection: 0,
};
