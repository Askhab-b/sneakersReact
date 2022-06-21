import React, { useState } from "react";
import styles from "./app.module.css";
import Maping from "./components/Header/Maping/Maping";

function App() {
  return (
    <div className={styles.app}>
      <Maping />
    </div>
  );
}

export default App;
