// pages/order-tracking.js

import React from 'react';
import { Button, TextField, Typography, Paper, Grid } from '@mui/material';

const OrderTrackingPage = () => {
  const order = {
    created_at: '2023-09-20',
    user: { name: 'John Doe' },
    order_status: 'shipped',
    invoice_id: 'H25-21578455',
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Paper elevation={3} className="p-8 max-w-lg w-full">
        <Typography variant="h4" className="text-center mb-4 font-bold">
          Order Tracking
        </Typography>
        <Typography variant="body1" className="text-center mb-4">
          Enter your invoice ID to track your order status.
        </Typography>

        {/* Invoice ID Input */}
        <TextField
          label="Invoice ID*"
          variant="outlined"
          fullWidth
          className="mb-4"
          defaultValue={order.invoice_id}
          InputProps={{
            readOnly: true, // To prevent editing since this is static
          }}
        />
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Order Date</Typography>
            <Typography>{new Date(order.created_at).toLocaleDateString()}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Shopping By</Typography>
            <Typography>{order.user.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Status</Typography>
            <Typography>{order.order_status}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Tracking</Typography>
            <Typography>{order.invoice_id}</Typography>
          </Grid>
        </Grid>

        {/* Order Tracking Steps */}
        <ul className="mt-4 progtrckr" data-progtrckr-steps="4">
          <li className={`progtrckr_done icon_one check_mark`}>Pending</li>
          {order.order_status === 'canceled' ? (
            <li className="icon_four red_mark">Order Canceled</li>
          ) : (
            <>
              <li className={`progtrckr_done icon_two ${['processed_and_ready_to_ship', 'dropped_off', 'shipped', 'out_for_delivery', 'delivered'].includes(order.order_status) ? 'check_mark' : ''}`}>
                Order Processing
              </li>
              <li className={`icon_three ${['out_for_delivery', 'delivered'].includes(order.order_status) ? 'check_mark' : ''}`}>
                On the Way
              </li>
              <li className={`icon_four ${order.order_status === 'delivered' ? 'check_mark' : ''}`}>
                Delivered
              </li>
            </>
          )}
        </ul>

        <Button variant="outlined" color="primary" className="mt-4 w-full" href="/">
          <i className="fas fa-chevron-left"></i> Back to Home
        </Button>
      </Paper>
    </div>
  );
};

export default OrderTrackingPage;
