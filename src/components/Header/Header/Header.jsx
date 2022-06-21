import React, { useState } from "react";
import styles from "./header.module.css";

export default function Header({ item }) {
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
  console.log(item);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img src={item.img} className={styles.images} />
          <h1>{item.name}</h1>
          <div className={styles.blueBtn}>
            <button
              className={styles.btnOne}
              type="submit"
              onClick={handleDetail}
            >
              Детали
            </button>

            {detailText && (
              <div className={styles.detailBlock}>
                {" "}
                <div className={styles.x} onClick={handleDeleteDetail}>
                  x
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                dignissimos.
              </div>
            )}
          </div>
          <h1>{item.price}</h1>
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
