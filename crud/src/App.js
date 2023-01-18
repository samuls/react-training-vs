import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {Row, Col, Button} from 'react-bootstrap';
import AddForm from './components/AddForm';

const App = () => {
    let [newUser, setUser ] = useState({first_name : '', last_name : '', email_id :'', password:'', id:'' });
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    //const [ editUser, setEditUser] = useState([]);
    const [ isEditUser, setIsEditUser ] = useState(false);
    useEffect(() => getData(), []);

    let getData = () => {
        axios.get('https://62b55842da3017eabb18d432.mockapi.io/api/v1/users')
            .then(res => {
                setIsLoaded(true);
                setUsers(res.data);
            })
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            });
    }

    let editUserHandler = (e) => {
        axios.get('https://62b55842da3017eabb18d432.mockapi.io/api/v1/users/' + e.target.getAttribute('data-userid'))
        .then(res => 
            {
                setIsEditUser(true);
                setUser(res.data)
            }
        )
        .catch(error => setError(error));
    }

    const columns = [
        {
            name: 'First Name',
            selector: row => row.first_name,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.last_name
        },
        {
            name: 'Email ID',
            selector: row => row.email_id
        },
        {
            name : 'Action',
            cell: row => <div>
                <Button data-userid={row.id} onClick={editUserHandler} variant='secondary' size='sm'>Edit</Button>
                &nbsp;<Button variant='danger' size='sm'>Delete</Button>
            </div>
        }
    ]

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Row>
                    <Col>
                        <h2>Users</h2>
                        <DataTable columns={columns}
                            data={users}
                            pagination />
                    </Col>
                    <Col>
                        <AddForm getData={getData} newUser={newUser} isEditUser={isEditUser} setUser={setUser} />
                    </Col>
                </Row>
            </>
        );
    }
}


export default App;
