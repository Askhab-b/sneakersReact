import React from "react";
import styles from "./maping.module.css";
import Header from "../Header/Header";
import { useState } from "react";

export default function Maping() {
  const [products, setProducts] = useState([
    {
      name: "Nike",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6mZze5A3wXJwQUjs25DtqLUmOmLC5HVtUQ&usqp=CAU",
      price: 120,
    },

    {
      name: "Reebok",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6mZze5A3wXJwQUjs25DtqLUmOmLC5HVtUQ&usqp=CAU",
      price: 200,
    },

    {
      name: "Puma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6mZze5A3wXJwQUjs25DtqLUmOmLC5HVtUQ&usqp=CAU",
      price: 250,
    },

    {
      name: "Adidas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6mZze5A3wXJwQUjs25DtqLUmOmLC5HVtUQ&usqp=CAU",
      price: 300,
    },
  ]);

  const [value, setValue] = useState("")

  const filteredSneakers = products.filter(sneaker => {
    return sneaker.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <>
      <div className={styles.mapingMainContainer}>
        <input type="text" placeholder="Введите название" onChange={(e) => setValue(e.target.value)}></input>
        <div className={styles.maping}>
          {filteredSneakers.map((item, index) => {
            return (
              <div key={index}>
                <Header item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
