import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { Container, Form } from "react-bootstrap/";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import Markdown from "marked-react";

function Previewer() {
  const { text } = useContext(MyContext);

  return (
    <Container className="m-5 w-50">
      <Form>
        <Form.Group>
          <Form.Label className="fw-bold text-start text-black bg-white w-100 m-0 p-2">
            <FontAwesomeIcon icon={faFreeCodeCamp} /> Previewer
          </Form.Label>

          <p id="preview" className="bg-secondary p-2">
            <Markdown gfm="true" breaks="true">
              {text}
            </Markdown>
          </p>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Previewer;
