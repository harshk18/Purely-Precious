import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import Loader from "../Loader";
import Message from "../Message";
import { useGetTopProductsQuery } from "../../slices/productsApiSlice";
import styles from "./ProductCarousel.module.css";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    if (products && products.length > 0) {
      const carouselDom = carouselRef.current;
      const SliderDom = sliderRef.current;
      const thumbnailBorderDom = thumbnailBorderRef.current;
      const nextDom = nextRef.current;
      const prevDom = prevRef.current;

      let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(
        `.${styles.item}`
      );
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

      const timeRunning = 2000;
      const timeAutoNext = 6000;

      let runTimeOut;
      let runNextAuto;

      const showSlider = (type) => {
        let SliderItemsDom = SliderDom.querySelectorAll(`.${styles.item}`);
        thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(
          `.${styles.item}`
        );

        if (type === "next") {
          SliderDom.appendChild(SliderItemsDom[0]);
          thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
          carouselDom.classList.add(styles.next);
        } else {
          SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
          thumbnailBorderDom.prepend(
            thumbnailItemsDom[thumbnailItemsDom.length - 1]
          );
          carouselDom.classList.add(styles.prev);
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
          carouselDom.classList.remove(styles.next);
          carouselDom.classList.remove(styles.prev);
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      };

      nextDom.onclick = () => showSlider("next");
      prevDom.onclick = () => showSlider("prev");

      // Initial auto-next
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);

      // Cleanup function
      return () => {
        clearTimeout(runTimeOut);
        clearTimeout(runNextAuto);
      };
    }
  }, [products]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Row className="mb-2">
      <Col>
        <div className={styles.carousel} ref={carouselRef}>
          <div className={styles.list} ref={sliderRef}>
            {products &&
              products.map((product) => (
                <div key={product._id} className={styles.item}>
                  <Image src={product.image} alt={product.name} />
                  <div className={styles.content}>
                    <div className={styles.author}>Purely Precious's</div>
                    <div className={styles.topic}>{product.name}</div>
                    <Link to={`/product/${product._id}`}>
                      <button className={styles.button}>BUY NOW</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.thumbnail} ref={thumbnailBorderRef}>
            {products &&
              products.map((product) => (
                <div key={product._id} className={styles.item}>
                  <Image src={product.image} alt={product.name} />
                </div>
              ))}
          </div>

          <div className={styles.arrows}>
            <button id="prev" ref={prevRef}>
              {"<"}
            </button>
            <button id="next" ref={nextRef}>
              {">"}
            </button>
          </div>
          <div className={styles.time} />
        </div>
      </Col>
    </Row>
  );
};

export default ProductCarousel;
