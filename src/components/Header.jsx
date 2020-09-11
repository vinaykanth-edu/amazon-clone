import React from "react";
import styles from "./header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.header_logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className={styles.header_search}>
        <input className={styles.header_searchInput} type="text" />
        <SearchIcon className={styles.header_searchIcon} />
      </div>
      <div className={styles.header_nav}>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Hello Guest</span>
          <span className={styles.header_optionLineTwo}>Sign In</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Returns</span>
          <span className={styles.header_optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Your</span>
          <span className={styles.header_optionLineTwo}>Prime</span>
        </div>

        <div className={styles.header_optionBasket}>
            <ShoppingBasketIcon />
            <span className={styles.header_optionLineTwo && styles.header_basketCount} >0</span>
        </div>

        

      </div>
    </div>
  );
}

export default Header;
