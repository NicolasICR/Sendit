import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './Component/Navbar';
import PersonForm from './Component/Form';

const App = () => {
  const [currentOption, setCurrentOption] = useState('list');
  const [people, setPeople] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    fetchPeople();
  }, []);

// Consumir info de la API
  const fetchPeople = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPeople(response.data);
    } catch (error) {
      console.error('Error fetching people:', error);
    }
  };

// Controladores de acciones
  const handleInputChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newPerson);
        setPeople([...people, response.data]);
        setNewPerson({
          name: '',
          email: '',
          phone: '',
          address: '',
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          address: '',
        });
      } catch (error) {
        console.error('Error creating person:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setPeople(people.filter((person) => person.id !== id));
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  };

// Validaciones
  const validateForm = () => {
    let isValid = true;
    const { name, email, phone, address } = newPerson;
    const errors = {
      name: '',
      email: '',
      phone: '',
      address: '',
    };

    if (name.trim() === '') {
      errors.name = 'El nombre es requerido';
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = 'El nombre solo debe contener letras';
      isValid = false;
    }

    if (email.trim() === '') {
      errors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El email ingresado no es válido';
      isValid = false;
    }

    if (phone.trim() === '') {
      errors.phone = 'El teléfono es requerido';
      isValid = false;
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = 'El teléfono solo debe contener números';
      isValid = false;
    }

    if (address.trim() === '') {
      errors.address = 'La dirección es requerida';
      isValid = false;
    } else if (address.length > 30) {
      errors.address = 'La dirección no debe contener más de 20 caracteres';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div>
    <Barra handleOptionChange={handleOptionChange} />
    <Container>
      {currentOption === 'list' && (
        <>
          <h1>Lista de Personas</h1>
          <Table striped bordered hover>
          <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.address.city}, {person.address.street}, {person.address.suite}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(person.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
          </Table>
        </>
      )}

      {currentOption === 'add' && (
        <>
          <h2>Agregar Persona</h2>
          <PersonForm
            newPerson={newPerson}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </>
      )}
    </Container>
  </div>
  
    /* <div>
   <Barra />
    <Container>
      <h1>Lista de Personas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.address.city}, {person.address.street}, {person.address.suite}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(person.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Agregar Persona</h2>
      <PersonForm
        newPerson={newPerson}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </Container>
    </div>*/
  );
};

export default App; 