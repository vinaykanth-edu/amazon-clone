import React from "react";
import styles from "./home.module.css";
import Product from "../Products/Product";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <img
          className={styles.home__image}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
        />
        <div className={styles.home__row}>
          <Product
            id="1"
            title="The Alchemist Paperback – 17 October 2005"
            price={352.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
          />
          <Product
            id="2"
            title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
            price={67490.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id="3"
            title="Fitbit Charge 3 Fitness Activity Tracker, Graphite/Black"
            price={26000}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={5803}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={112900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1137352.02}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
