import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const UserList = () => {
  let [newUser, setUser] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
    id: "",
  });
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => getData(), []);

  let getData = () => {
    axios
      .get("https://62b55842da3017eabb18d432.mockapi.io/api/v1/users")
      .then((res) => {
        setIsLoaded(true);
        setUsers(res.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  };

  let handleDeleteUser = (e) => {
    e.preventDefault();
    axios
      .delete(
        "https://62b55842da3017eabb18d432.mockapi.io/api/v1/users/" +
          e.target.getAttribute("data-userid")
      )
      .then((res) => {
        getData();
      })
      .catch((error) => setError(error));
  };

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
    },
    {
      name: "Email ID",
      selector: (row) => row.email_id,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Link to={`details/${row.id}`}>Edit</Link>
          &nbsp;
          <Button
            data-userid={row.id}
            variant="danger"
            size="sm"
            onClick={handleDeleteUser}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  if (error) {
    return <Layout showData={false} showUserMessage={error.message} />
  } else if (!isLoaded) {
    return <Layout showData={false} showUserMessage='Loading....' />
  } else {
    return <Layout showData={true} columns={columns} users={users} />
  }
};

export default UserList;
