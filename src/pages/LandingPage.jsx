import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'; // Import your CSS file



function LandingPage() {
    return (
      <div className={styles.landing_page}>
        <h1>Welcome to Our Marketing Website!</h1>
        <p>Boost your brand and reach new heights.</p>
        <Link to="/contact">Contact Us</Link>
        {/* Consider adding a call to action button here, e.g., "Learn More" or "Get Started" */}
      </div>
    );
  }

export default LandingPage;
