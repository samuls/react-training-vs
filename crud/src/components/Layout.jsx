import { Accordion, Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";

const Layout = (props) => {
    return (
        <>
        <Container>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>User Lising</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <h2>Users</h2>
                    <Link to={'/addform'} className='pull-right btn btn-primary'>Add New</Link>
                    {props.showData ? <DataTable columns={props.columns} data={props.users} pagination /> : props.showUserMessage}
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
        </>
    )
}

export default Layout;