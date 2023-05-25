import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const PersonForm = ({ newPerson, handleInputChange, handleSubmit, errors }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" value={newPerson.name} onChange={handleInputChange} required />
        {errors.name && <Alert variant="danger">{errors.name}</Alert>}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={newPerson.email} onChange={handleInputChange} required />
        {errors.email && <Alert variant="danger">{errors.email}</Alert>}
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" name="phone" value={newPerson.phone} onChange={handleInputChange} required />
        {errors.phone && <Alert variant="danger">{errors.phone}</Alert>}
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" name="address" value={newPerson.address} onChange={handleInputChange} required />
        {errors.address && <Alert variant="danger">{errors.address}</Alert>}
      </Form.Group>
      <Button variant="primary" type="submit">Agregar</Button>
    </Form>
  );
};

export default PersonForm;

/*import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const PersonForm = ({ newPerson, handleInputChange, handleSubmit, errors }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" value={newPerson.name} onChange={handleInputChange} required />
        {errors.name && <Alert variant="danger">{errors.name}</Alert>}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={newPerson.email} onChange={handleInputChange} required />
        {errors.email && <Alert variant="danger">{errors.email}</Alert>}
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" name="phone" value={newPerson.phone} onChange={handleInputChange} required />
        {errors.phone && <Alert variant="danger">{errors.phone}</Alert>}
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" name="address" value={newPerson.address} onChange={handleInputChange} required />
        {errors.address && <Alert variant="danger">{errors.address}</Alert>}
      </Form.Group>
      <Button variant="primary" type="submit">Agregar</Button>
    </Form>
  );
};

export default PersonForm;*/