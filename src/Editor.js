import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { Container, Form } from "react-bootstrap/";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Editor() {
  const { text, setText } = useContext(MyContext);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container className="m-5 mb-0 w-25">
      <Form>
        <Form.Group>
          <Form.Label className="fw-bold text-start bg-secondary w-100 m-0 p-2">
            <FontAwesomeIcon icon={faFreeCodeCamp} /> Editor
          </Form.Label>

          <Form.Control rows={10}
            value={text}
            id="editor"
            onChange={handleTextChange}
            as="textarea"
            className="rounded-0"
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Editor;
