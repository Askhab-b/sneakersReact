import React, { useState } from "react";
import styles from "./header.module.css";
import img from "../../img/Sneaker.jpeg";

export default function Header() {
  const [twobasket, setTwobasket] = useState("Добавить в корзину");
  const [disable, setDisable] = useState(false);
  const [deleteBasket, setDeleteBasket] = useState("");
  const [detailText, setDetailText] = useState(false);

  const handleClick = () => {
    setTwobasket("Уже в корзине");
    setDisable(true);
    setDeleteBasket("Удалить из корзины");
  };

  const handleDelete = () => {
    setTwobasket("Добавить в корзину");
    setDisable(false);
    setDeleteBasket(!deleteBasket);
  };

  const handleDetail = () => {
    setDetailText(true);
  };

  const handleDeleteDetail = () => {
    setDetailText(false);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img src={img} />
          <h1>Nike Sneaker</h1>
          <div className={styles.blueBtn}>
            <button
              className={styles.btnOne}
              type="submit"
              onClick={handleDetail}
            >
              Детали
            </button>
            
            {detailText && (
              <div
                className={styles.detailBlock}
                

              > <div className={styles.x} onClick={handleDeleteDetail}>x</div>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                dignissimos.
              </div>
              
            )}
          </div>
          <h1>$120</h1>
          <div className={styles.footer}>
            <hr />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              dignissimos.
            </p>
            <button
              disabled={disable}
              className={styles.btnTwo}
              type="submit"
              onClick={handleClick}
            >
              {twobasket}
            </button>
            {
              <div
                className={styles.delete}
                type="submit"
                onClick={handleDelete}
              >
                {deleteBasket}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
