import { Alert } from "react-bootstrap";

const Alerta = ({ msg, color }) => {
  return (
    <>
      <Alert variant={color}>{msg}</Alert>
    </>
  );
};

export default Alerta;
