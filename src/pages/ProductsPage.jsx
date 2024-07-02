import { useState } from "react";
import styles from "./ProductsPage.module.css";

// Contact Page Component
function ProductsPage() {
  return (
    <>
      {/* <h1>Product Page</h1> */}
      {/* <NavList/> */}
      <PipeSection/>
    </>
  );
}

const NavList = () => {
  return (
    <nav className="navList w100 bodor-bg-gray11 psc t-0 zindex-999">
      <div className="maxw-1152 col-lg-11 col-md-11 mg-a df-sb ofh">
        <ul className="nav-content-l df">
          <li
            data-filter="https://www.bodor.com/en/scan/"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://www.bodor.com/en/scan/"
            >
              <img
                className="w-36 h-36 mb-8"
                src="../images/Laser Scanning Cutting.svg"
                alt="Laser Scanning Cutting"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Laser Scanning Cutting
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0">
                Pioneer in the Industry
              </p>
            </a>
          </li>

          <li
            data-filter="https://bodor.com/en/fiber-laser-cutting-machine/fiber-laser-metal-sheet-cutting-machines/"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/fiber-laser-cutting-machine/fiber-laser-metal-sheet-cutting-machines/"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Sheet Cutting.svg"
                alt="Sheet Cutting"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Sheet Cutting
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0"></p>
            </a>
          </li>

          <li
            data-filter="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Tube Cutting.svg"
                alt="Tube Cutting"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Tube Cutting
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0"></p>
            </a>
          </li>

          <li
            data-filter="https://bodor.com/en/fiber-laser-cutting-machine/metal-sheet-and-tube-laser-cutting-machines/"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/fiber-laser-cutting-machine/metal-sheet-and-tube-laser-cutting-machines/"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Sheet and Tube.svg"
                alt="Sheet and Tube"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Sheet and Tube
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0"></p>
            </a>
          </li>

          <li
            data-filter="https://bodor.com/en/fiber-laser-cutting-machine/special-profile-laser-cutting-machines/u10pro.html"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/fiber-laser-cutting-machine/special-profile-laser-cutting-machines/u10pro.html"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Special Profile.svg"
                alt="Special Profile"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Special Profile
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0">
                New Arrival
              </p>
            </a>
          </li>

          <li
            data-filter="https://bodor.com/en/laser-welding-machine/handheld-laser-welding-machine/bodorwelder-1500.html"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/laser-welding-machine/handheld-laser-welding-machine/bodorwelder-1500.html"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Welding Machine.svg"
                alt="Welding Machine"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Welding Machine
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0">
                New Arrival
              </p>
            </a>
          </li>

          <li
            data-filter="https://bodor.com/en/fiber-laser-cutting-machine/sheet-cutting-automation-devices/"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/fiber-laser-cutting-machine/sheet-cutting-automation-devices/"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Automation Devices.svg"
                alt="Automation Devices"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Automation Devices
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0"></p>
            </a>
          </li>
        </ul>

        <ul className="nav-content-r df">
          <li
            data-filter="https://bodor.com/en/contact/"
            className="w-128 h100 tc csp h-116 transition03 bg-white-hv"
          >
            <a
              className="w100 h100 dib pt-20"
              href="https://bodor.com/en/contact/"
            >
              <img
                className="w-36 h-36 mb-8"
                src="./img/nav/Customized Products.svg"
                alt="Customized Products"
              />
              <h5 className="bodor-PFRegular fs-12 c-black ltsp-0 mb-2 transition03">
                Customized Products
              </h5>
              <p className="bodor-PFRegular fs-12 bodor-color-orange6 ltsp-0"></p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};



const PipeSection = () => {
  return (
    <section id="Pipe" className="w100 bg-white swiperList-hover mg-a">
      <div className="maxw-1120 mg-a df-sb">
        <h3 className="bodor-PFMedium fs-32 c-black ltsp-0 lh-45">
          Tube metal laser cutting machines
        </h3>
        <div className="pr swiper_button_pr">
          <div
            className="swiper-button-next Pipe-swiper-button-next"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-7462b678108297262"
            aria-disabled="false"
          ></div>
          <div
            className="swiper-button-prev Pipe-swiper-button-prev swiper-button-disabled"
            tabIndex="-1"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-7462b678108297262"
            aria-disabled="true"
          ></div>
        </div>
      </div>
      <div className="pr">
        <div className="swiper Pipe-mySwiper ml-a mr-a pl-calc1152 pr-calc1152 mr--16 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper swiper_transition"
            id="swiper-wrapper-7462b678108297262"
            aria-live="polite"
            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
            <div
              className="swiper-slide w-848 h-390 pr pt-40 pb-64 content-box csp swiper-slide-active"
              role="group"
              aria-label="1 / 5"
              style={{ marginRight: '16px' }}
            >
              <a className="br-8" href="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/m.html">
                <div className="bodor-bg-gray11 w100 h100 br-8 ofh">
                  <div className="img-box w100 h-280 pr">
                    <img className="pa zindex-1" src="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20M.webp" alt="" />
                    <div className="pa t-16 l-16 lh100">
                      <span className="scan_tag xs-dn sm-dn bodor-PFRegular fs-12 c-white op-0 zindex-3 transition03">
                        Flagship laser metal tube cutting machine
                      </span>
                    </div>
                  </div>
                  <hr className="w100 h-1 op-02" />
                  <div className="w100 pt-24 pb-24 pl-16 pr-16">
                    <h4 className="bodor-PFMedium fs-24 mb-8 c-black ltsp-0">Bodor M</h4>
                    <svg
                      className="dn sm-db xs-db"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.54053 11.5404L9.08091 7.99998L5.54053 4.45959L6.45977 3.54036L10.9194 7.99998L6.45977 12.4596L5.54053 11.5404Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                    </svg>
                    <div className="w100 df-sb sm-dn xs-dn">
                      <p className="bodor-PFRegular c-828898 fs-16 ltsp-0 w70">Flagship Product</p>
                      <span className="bodor-PFRegular more c-black fs-16 ltsp-0 df-c transition03">
                        View more
                        <svg className="icon xiangyou" aria-hidden="true">
                          <use xlinkHref="#icon-xiangyou"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="swiper-slide w-848 h-390 pr pt-40 pb-64 content-box csp swiper-slide-next"
              role="group"
              aria-label="2 / 5"
              style={{ marginRight: '16px' }}
            >
              <a className="br-8" href="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/t.html">
                <div className="bodor-bg-gray11 w100 h100 br-8 ofh">
                  <div className="img-box w100 h-280 pr">
                    <img className="pa zindex-1" src="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20T.webp" alt="" />
                    <div className="pa t-16 l-16 lh100">
                      <span className="scan_tag xs-dn sm-dn bodor-PFRegular fs-12 c-white op-0 zindex-3 transition03">
                        All-around fiber laser metal tube cutting machine
                      </span>
                    </div>
                  </div>
                  <hr className="w100 h-1 op-02" />
                  <div className="w100 pt-24 pb-24 pl-16 pr-16">
                    <h4 className="bodor-PFMedium fs-24 mb-8 c-black ltsp-0">Bodor T</h4>
                    <svg
                      className="dn sm-db xs-db"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.54053 11.5404L9.08091 7.99998L5.54053 4.45959L6.45977 3.54036L10.9194 7.99998L6.45977 12.4596L5.54053 11.5404Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                    </svg>
                    <div className="w100 df-sb sm-dn xs-dn">
                      <p className="bodor-PFRegular c-828898 fs-16 ltsp-0 w70">High-performance Product</p>
                      <span className="bodor-PFRegular more c-black fs-16 ltsp-0 df-c transition03">
                        View more
                        <svg className="icon xiangyou" aria-hidden="true">
                          <use xlinkHref="#icon-xiangyou"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="swiper-slide w-848 h-390 pr pt-40 pb-64 content-box csp"
              role="group"
              aria-label="3 / 5"
              style={{ marginRight: '16px' }}
            >
              <a className="br-8" href="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/k.html">
                <div className="bodor-bg-gray11 w100 h100 br-8 ofh">
                  <div className="img-box w100 h-280 pr">
                    <img className="pa zindex-1" src="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20K.webp" alt="" />
                    <div className="pa t-16 l-16 lh100">
                      <span className="scan_tag xs-dn sm-dn bodor-PFRegular fs-12 c-white op-0 zindex-3 transition03">
                        Entry-level fiber laser metal tube cutting machine
                      </span>
                    </div>
                  </div>
                  <hr className="w100 h-1 op-02" />
                  <div className="w100 pt-24 pb-24 pl-16 pr-16">
                    <h4 className="bodor-PFMedium fs-24 mb-8 c-black ltsp-0">Bodor K</h4>
                    <svg
                      className="dn sm-db xs-db"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.54053 11.5404L9.08091 7.99998L5.54053 4.45959L6.45977 3.54036L10.9194 7.99998L6.45977 12.4596L5.54053 11.5404Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                    </svg>
                    <div className="w100 df-sb sm-dn xs-dn">
                      <p className="bodor-PFRegular c-828898 fs-16 ltsp-0 w70">Entry-level Product</p>
                      <span className="bodor-PFRegular more c-black fs-16 ltsp-0 df-c transition03">
                        View more
                        <svg className="icon xiangyou" aria-hidden="true">
                          <use xlinkHref="#icon-xiangyou"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="swiper-slide w-848 h-390 pr pt-40 pb-64 content-box csp"
              role="group"
              aria-label="4 / 5"
              style={{ marginRight: '16px' }}
            >
              <a className="br-8" href="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/a.html">
                <div className="bodor-bg-gray11 w100 h100 br-8 ofh">
                  <div className="img-box w100 h-280 pr">
                    <img className="pa zindex-1" src="https://www.bodor.com/en/Products/img/%E7%AE%A1%E6%9D%90%E5%88%87%E5%89%B2%E6%9C%BA/Bodor%20Q.webp" alt="" />
                    <div className="pa t-16 l-16 lh100">
                      <span className="scan_tag xs-dn sm-dn bodor-PFRegular fs-12 c-white op-0 zindex-3 transition03">
                        Entry-level fiber laser metal tube cutting machine
                      </span>
                    </div>
                  </div>
                  <hr className="w100 h-1 op-02" />
                  <div className="w100 pt-24 pb-24 pl-16 pr-16">
                    <h4 className="bodor-PFMedium fs-24 mb-8 c-black ltsp-0">Bodor A</h4>
                    <svg
                      className="dn sm-db xs-db"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.54053 11.5404L9.08091 7.99998L5.54053 4.45959L6.45977 3.54036L10.9194 7.99998L6.45977 12.4596L5.54053 11.5404Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                    </svg>
                    <div className="w100 df-sb sm-dn xs-dn">
                      <p className="bodor-PFRegular c-828898 fs-16 ltsp-0 w70">Entry-level Product</p>
                      <span className="bodor-PFRegular more c-black fs-16 ltsp-0 df-c transition03">
                        View more
                        <svg className="icon xiangyou" aria-hidden="true">
                          <use xlinkHref="#icon-xiangyou"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="swiper-slide w-848 h-390 pr pt-40 pb-64 content-box csp"
              role="group"
              aria-label="5 / 5"
              style={{ marginRight: '16px' }}
            >
              <a className="br-8" href="https://bodor.com/en/fiber-laser-cutting-machine/tube-laser-cutting-machines/i.html">
                <div className="bodor-bg-gray11 w100 h100 br-8 ofh">
                  <div className="img-box w100 h-280 pr">
                    <img className="pa zindex-1" src="./img/管材切割机/Bodor I.webp" alt="" />
                    <div className="pa t-16 l-16 lh100">
                      <span className="scan_tag xs-dn sm-dn bodor-PFRegular fs-12 c-white op-0 zindex-3 transition03">
                        All-in-one fiber laser metal tube cutting machine
                      </span>
                    </div>
                  </div>
                  <hr className="w100 h-1 op-02" />
                  <div className="w100 pt-24 pb-24 pl-16 pr-16">
                    <h4 className="bodor-PFMedium fs-24 mb-8 c-black ltsp-0">Bodor I</h4>
                    <svg
                      className="dn sm-db xs-db"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.54053 11.5404L9.08091 7.99998L5.54053 4.45959L6.45977 3.54036L10.9194 7.99998L6.45977 12.4596L5.54053 11.5404Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                    </svg>
                    <div className="w100 df-sb sm-dn xs-dn">
                      <p className="bodor-PFRegular c-828898 fs-16 ltsp-0 w70">High-performance Product</p>
                      <span className="bodor-PFRegular more c-black fs-16 ltsp-0 df-c transition03">
                        View more
                        <svg className="icon xiangyou" aria-hidden="true">
                          <use xlinkHref="#icon-xiangyou"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
