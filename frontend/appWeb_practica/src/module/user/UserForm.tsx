import React from 'react';
import { Form, Input, Button } from 'antd';

const UserForm: React.FC = () => (
  <>
    {/* Formulario con layout horizontal */}
    <Form
      name="horizontal-form"
      layout="horizontal"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={(values) => console.log('Horizontal Submit:', values)}
    >
      <Form.Item
        label="Nombre"
        name="nombre"
        rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Correo"
        name="correo"
        rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          Enviar Horizontal
        </Button>
      </Form.Item>
    </Form>

    <br />

    {/* Formulario con layout vertical */}
    <Form
      name="vertical-form"
      layout="vertical"
      onFinish={(values) => console.log('Vertical Submit:', values)}
    >
      <Form.Item
        label="Usuario"
        name="usuario"
        rules={[{ required: true, message: 'Por favor ingresa un usuario' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="contrasena"
        rules={[{ required: true, message: 'Por favor ingresa una contraseña' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar Vertical
        </Button>
      </Form.Item>
    </Form>
  </>
);

export default UserForm;