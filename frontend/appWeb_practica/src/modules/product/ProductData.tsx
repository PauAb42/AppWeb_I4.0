import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  qty: number;
  status: boolean;
  createDate: string;
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([
    {
      _id: 'prod1',
      name: 'Teclado Gamer',
      description: 'Teclado mecánico RGB con switches azules',
      price: 899,
      qty: 15,
      status: true,
      createDate: new Date().toISOString(),
    },
    {
      _id: 'prod2',
      name: 'Mouse Inalámbrico',
      description: 'Mouse ergonómico con batería recargable',
      price: 499,
      qty: 30,
      status: true,
      createDate: new Date().toISOString(),
    },
  ]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      // Deja los datos demo si falla
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const eliminarProducto = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      fetchProducts(); // Actualiza lista
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const columns: ColumnsType<Product> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Cantidad',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_text, record) => (
        <Button danger onClick={() => eliminarProducto(record._id)}>
          Eliminar
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Lista de Productos</h2>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
