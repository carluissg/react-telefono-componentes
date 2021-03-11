import PropTypes from "prop-types";
import NumeroTeclado from "./numeroTeclado";

const Teclado = (props) => {
  const { llamando, anyadirDigito, borrarUltimoDigito } = props;
  return (
    <ol className="teclado">
      <numeroTeclado llamando={llamando} anyadirDigito={anyadirDigito} />
    </ol>
  );
};
Teclado.propTypes = {
  llamando: PropTypes.bool.isRequired,
  anyadirDigito: PropTypes.func.isRequired,
};

export default Teclado;
