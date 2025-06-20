import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import axios from 'axios';

interface Order {
  _id: string;
  userId: string;
  subtotal: number;
  total: number;
  status: string;
  createDate: string;
}

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>([
    {
      _id: '',
      userId: 'Pau',
      subtotal: 1500,
      total: 1800,
      status: 'PAID',
      createDate: new Date().toISOString(),
    },
    {
      _id: '',
      userId: 'Yadim',
      subtotal: 800,
      total: 960,
      status: 'PENDING',
      createDate: new Date().toISOString(),
    },
  ]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/orders');
      setOrders(res.data);
    } catch (error) {
      console.error('Error al obtener órdenes:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const columns = [
    { title: 'Usuario', dataIndex: 'userId', key: 'userId' },
    { title: 'Subtotal', dataIndex: 'subtotal', key: 'subtotal' },
    { title: 'Total', dataIndex: 'total', key: 'total' },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const color = status === 'PAID' ? 'green' : status === 'CANCELLED' ? 'red' : 'gold';
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Órdenes</h2>
      <Table dataSource={orders} columns={columns} rowKey="_id" />
    </div>
  );
}
