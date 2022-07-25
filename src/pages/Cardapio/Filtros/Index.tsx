import filtros from "./Filtros.json";
import styles from "./Filtros.module.scss";

type Item = typeof filtros[0];

export default function Filtros() {
  function selecionarFiltro(item: Item) {}

  return (
    <div className={styles.filtros}>
      {filtros.map((item) => (
        <button
          key={item.id}
          onClick={() => selecionarFiltro(item)}
          className={styles.filtros__filtro}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
