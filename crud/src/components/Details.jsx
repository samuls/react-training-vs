import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Accordion, Container, Form, Button } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
    id: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

  const [error, setError] = useState();

  useEffect(() => {
    setBtnDisabled(true);
    handleEditUser(id);
    async function handleEditUser(id) {
      axios.get("https://62b55842da3017eabb18d432.mockapi.io/api/v1/users/" + id)
        .then((res) => {
          setUsers(res.data);
          setBtnDisabled(false);
        })
        .catch((error) => setError(error));
    }
  }, []);

  let  updateUserData = (e) => {
    setBtnDisabled(true);
    axios.put('https://62b55842da3017eabb18d432.mockapi.io/api/v1/users/' + id, users)
    .then(res => 
        {
          console.log(res.statusText);
            if( res.statusText === "OK" ) {
              navigate('/');
            }
        }
    )
    .catch(error => {
      setError(error); 
      setBtnDisabled(false);
    });
}

let cancelUpdate = () => {
  navigate('/');
}

  let addInputHandler = (e) => {
      setUsers( {...users, [e.target.id] : e.target.value} )
  }

  let handleClearForm = () => {
      setUsers({first_name : '', last_name : '', email_id :'', password:'', id:'' });
  }

  return (
    <>
      <Container>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Update User Details</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Control type="hidden" id="id" />
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    id="first_name"
                    value={users.first_name ?? ''}
                    onInput={addInputHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    id="last_name"
                    value={users.last_name}
                    onInput={addInputHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email ID"
                    id="email_id"
                    value={users.email_id}
                    onInput={addInputHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    value={users.password}
                    onInput={addInputHandler}                    
                  />
                </Form.Group>
                <Button
                  onClick={updateUserData}
                  data-userid={users.id}
                  variant="primary"
                  size="sm"
                  className="right"
                  disabled={btnDisabled}
                >
                  Update
                </Button>
                &nbsp;&nbsp;
                <Button
                  onClick={cancelUpdate}
                  variant="danger"
                  size="sm"
                  className="right"
                >
                  Cancel
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Details;
