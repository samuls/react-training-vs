import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const AddForm = () => {
    return <>hello</>
    // let [ show, setShow ] = useState(false);
    // const [error, setError] = useState(null);
    // let addInputHandler = (e) => {
    //     setUser( {...newUser, [e.target.id] : e.target.value} )
    // }

    // let addNewUser = () => {
    //     axios.post("https://62b55842da3017eabb18d432.mockapi.io/api/v1/users", newUser)
    //     .then( addRes => {
    //         if( addRes.statusText === "Created" ) {
    //             setShow(true);
    //         }
    //         handleClearForm();
    //     })
    //     .catch(error =>  setError(error));
    // }

    // let handleClearForm = () => {
    //     setUser({first_name : '', last_name : '', email_id :'', password:'', id:'' });
    //     getData();
    //     setIsEditUser(false);
    // }

    // let  updateUserData = (e) => {
    //     let id = e.target.getAttribute('data-userid');
    //     axios.put('https://62b55842da3017eabb18d432.mockapi.io/api/v1/users/' + e.target.getAttribute('data-userid'), newUser)
    //     .then(res => 
    //         {
    //             if( res.statusText === "OK" ) {
    //                 getData();
    //             }
    //             handleClearForm();
    //         }
    //     )
    //     .catch(error => setError(error));
    //     handleClearForm();
    // }

    // return (
    //     <>
    //         <Alert show={show} variant="success">
    //             <Alert.Heading>Success!</Alert.Heading>
    //             <p>
    //               User created successfully.
    //             </p>
    //         </Alert>
    //         {error}
    //         <h2>{!isEditUser ? 'Add New User' : 'Edit User' }</h2>
    //         <Form>
    //             <Form.Control type="hidden" id="id" />
    //             <Form.Group className="mb-3">
    //                 <Form.Label>First Name</Form.Label>
    //                 <Form.Control 
    //                 type="text" 
    //                 placeholder="Enter First Name" 
    //                 id="first_name" 
    //                 value={newUser.first_name} 
    //                 onInput={addInputHandler}/>
    //             </Form.Group>

    //             <Form.Group className="mb-3">
    //                 <Form.Label>Last Name</Form.Label>
    //                 <Form.Control 
    //                 type="text" 
    //                 placeholder="Enter Last Name" 
    //                 id="last_name" 
    //                 value={newUser.last_name} 
    //                 onInput={addInputHandler}/>
    //             </Form.Group>

    //             <Form.Group className="mb-3">
    //                 <Form.Label>Email ID</Form.Label>
    //                 <Form.Control 
    //                 type="email" 
    //                 placeholder="Enter Email ID" 
    //                 id="email_id" 
    //                 value={newUser.email_id} 
    //                 onInput={addInputHandler}/>
    //             </Form.Group>

    //             <Form.Group className="mb-3">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control 
    //                 type="password" 
    //                 placeholder="Enter Password" 
    //                 id="password"
    //                 value={newUser.password} 
    //                 onInput={addInputHandler}/>
    //             </Form.Group>

    //             <Button onClick={!isEditUser ? addNewUser : updateUserData} data-userid={newUser.id} variant="primary" size="sm" className='right'>
    //             {!isEditUser ? 'Save' : 'Update'}
    //             </Button>
    //             &nbsp;&nbsp;
    //             <Button onClick={handleClearForm}  variant="danger" size="sm" className='right'>
    //                 Clear
    //             </Button>
    //         </Form>
    //     </>
    // );
}

export default AddForm;