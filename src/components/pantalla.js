import PropTypes from "prop-types";

const pantalla = (props) => {
  const { numero } = props;
  return (
    <span className="numero">{numero}</span>
  );
};
pantalla.propTypes = {
  numero: PropTypes.string.isRequired
};
export default pantalla;
