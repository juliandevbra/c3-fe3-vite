import Button from "../Components/Button";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import withErrorBoundary from "../HOC/withErrorBoundary";

const Contact = () => {
  return (
    <>
      <h4>Hacenos tu consulta</h4>
      <Form />
    </>
  );
};
const ContactWithError = withErrorBoundary(Contact);
export default ContactWithError;
