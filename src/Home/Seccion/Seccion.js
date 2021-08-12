import styles from "./styles.module.css";

function Seccion({
  imagen,
  titulo,
  textoBoton,
  parrafo,
  posicion = "derecha",
}) {
  const layout = posicion === "derecha" ? "layoutDerecha" : "layoutIzquierda";
  return (
    <div className={`${styles.seccionHome} ${styles[layout]}`}>
      <div className={styles.sectionContent}>
        <img src={imagen} alt={titulo} />
      </div>
      <div className={styles.infoContent}>
        <h2>{titulo}</h2>
        <p>{parrafo}</p>
        <button className={styles.boton}>{textoBoton}</button>
      </div>
    </div>
  );
}

export default Seccion;
