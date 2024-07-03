import React from "react";
import styles from "./ProductsPage.module.css";
import Footer from "./Footer";
function ProductsPage() {
  return (
    <>
      <NavList />
      <PipeSection />
      <Footer/>
    </>
  );
}

const NavList = () => {
  return (
    <nav className={styles.navList}>
      <div className={styles.navContainer}>
        <ul className={styles.navContentLeft}>
          <NavItem
            filter="https://bodor.com/en/fiber-laser-cutting-machine/fiber-laser-metal-sheet-cutting-machines/"
            imgSrc="https://static.bodor.com/images/fiber-laser-cutting-machine/dream.webp"
            imgAlt="Sheet Cutting"
            title="Sheet Cutting"
          />
          
          <NavItem
            filter="https://bodor.com/en/fiber-laser-cutting-machine/metal-sheet-and-tube-laser-cutting-machines/"
            imgSrc="https://static.bodor.com/images/fiber-laser-cutting-machine/ct.webp"
            imgAlt="Sheet and Tube"
            title="Sheet and Tube"
          />
          <NavItem
            filter="https://bodor.com/en/fiber-laser-cutting-machine/special-profile-laser-cutting-machines/u10pro.html"
            imgSrc="https://static.bodor.com/images/fiber-laser-cutting-machine/u10pro.webp"
            imgAlt="Special Profile"
            title="Special Profile"
            description="New Arrival"
          />
          <NavItem
            filter="https://bodor.com/en/laser-welding-machine/handheld-laser-welding-machine/bodorwelder-1500.html"
            imgSrc="https://static.bodor.com/images/handheld-laser-welding-machine/bodorWelder1500.webp"
            imgAlt="Welding Machine"
            title="Welding Machine"
            description="New Arrival"
          />
          <NavItem
            filter="https://bodor.com/en/fiber-laser-cutting-machine/sheet-cutting-automation-devices/"
            imgSrc="https://static.bodor.com/images/fiber-laser-cutting-machine/iTransTower.webp"
            imgAlt="Automation Devices"
            title="Automation Devices"
          />
        </ul>
        {/* <ul className={styles.navContentRight}>
          <NavItem
            filter="https://bodor.com/en/contact/"
            imgSrc="https://static.bodor.com/images/contact/contact.webp"
            imgAlt="Customized Products"
            title="Customized Products"
          />
        </ul> */}
      </div>
    </nav>
  );
};

const NavItem = ({ filter, imgSrc, imgAlt, title, description }) => {
  return (
    <li className={styles.navItem} data-filter={filter}>
      <a className={styles.navLink} href={filter}>
        <img className={styles.navImage} src={imgSrc} alt={imgAlt} />
        <h5 className={styles.navTitle}>{title}</h5>
        {description && <p className={styles.navDescription}>{description}</p>}
      </a>
    </li>
  );
};

const PipeSection = () => {
  return (
    <section id="Pipe" className={styles.pipeSection}>
      <div className={styles.pipeHeader}>
        <h3 className={styles.pipeTitle}>
          Tube metal laser cutting machines
        </h3>
        <div className={styles.pipeNavigation}>
          <div className={`${styles.swiperButton} ${styles.swiperButtonNext}`} role="button" aria-label="Next slide"></div>
          <div className={`${styles.swiperButton} ${styles.swiperButtonPrev}`} role="button" aria-label="Previous slide"></div>
        </div>
      </div>
      <div className={styles.swiperContainer}>
        <div className={styles.swiperWrapper}>
          <PipeSlide
            link="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/m.html"
            imgSrc="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20M.webp"
            title="Bodor M"
            description="Flagship laser metal tube cutting machine"
            tag="Flagship Product"
          />
          <PipeSlide
            link="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/t.html"
            imgSrc="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20T.webp"
            title="Bodor T"
            description="All-around fiber laser metal tube cutting machine"
            tag="High-performance Product"
          />
          <PipeSlide
            link="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/k.html"
            imgSrc="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20K.webp"
            title="Bodor K"
            description="Entry-level fiber laser metal tube cutting machine"
            tag="Entry-level Product"
          />
          <PipeSlide
            link="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/a.html"
            imgSrc="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20Q.webp"
            title="Bodor A"
            description="Entry-level fiber laser metal tube cutting machine"
            tag="Entry-level Product"
          />
                  </div>
      </div>
    </section>
  );
};

const PipeSlide = ({ link, imgSrc, title, description, tag }) => {
  return (
    <div className={styles.pipeSlide}>
      <a className={styles.pipeLink} href={link}>
        <div className={styles.pipeImageWrapper}>
          <img className={styles.pipeImage} src={imgSrc} alt="" />
          <div className={styles.pipeTag}>
            <span className={styles.pipeTagText}>{description}</span>
          </div>
        </div>
        <hr className={styles.pipeDivider} />
        <div className={styles.pipeContent}>
          <h4 className={styles.pipeTitle}>{title}</h4>
          <div className={styles.pipeMore}>
            <p className={styles.pipeMoreText}>{tag}</p>
            <span className={styles.pipeMoreLink}>
              View more
              <svg className={styles.pipeMoreIcon} aria-hidden="true">
                <use xlinkHref="#icon-xiangyou"></use>
              </svg>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductsPage;
