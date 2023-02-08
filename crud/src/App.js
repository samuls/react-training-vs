import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import Details from './components/Details';
import AddForm from './components/AddForm';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<UserList />} />
                    <Route path='/addform' element={<AddForm />} />
                    <Route path='/details/:id' element={<Details />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;
