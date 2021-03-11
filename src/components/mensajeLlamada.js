import PropTypes from "prop-types";

const mensajeLlamada = (props) => {
  const { llamando } = props;
  return (
    <span className={`mensaje${!llamando ? " off" : ""}`}>Llamando...</span>
  );
};

mensajeLlamada.propTypes = {
  llamando: PropTypes.bool.isRequired
};

export default mensajeLlamada;
