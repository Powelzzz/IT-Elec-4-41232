import React from 'react';
import Link from 'next/link';

const addresses = [
  {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    country: "USA",
    city: "New York",
    zip: "10001",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "098-765-4321",
    email: "jane@example.com",
    country: "USA",
    city: "Los Angeles",
    zip: "90001",
    address: "456 Elm St",
  },
  // Add more addresses as needed
];

const shippingMethods = [
  { id: 1, name: "Standard Shipping", cost: 5.00, type: "flat_cost" },
  { id: 2, name: "Express Shipping", cost: 15.00, type: "min_cost", min_cost: 10.00 },
];

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb Section */}
      <section id="wsus__breadcrumb" className="bg-gray-200 py-4">
        <div className="text-center">
          <h4 className="text-xl">Check Out</h4>
          <ul className="flex justify-center space-x-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="text-gray-500">/ Check Out</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="wsus__cart_view" className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Shipping Details */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <h5 className="text-lg">Shipping Details</h5>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add New Address
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map(address => (
                  <div key={address.id} className="border rounded-lg p-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping_address"
                        id={`address_${address.id}`}
                        value={address.id}
                      />
                      <label className="form-check-label" htmlFor={`address_${address.id}`}>
                        Select Address
                      </label>
                    </div>
                    <ul className="mt-2">
                      <li><span>Name:</span> {address.name}</li>
                      <li><span>Phone:</span> {address.phone}</li>
                      <li><span>Email:</span> {address.email}</li>
                      <li><span>Country:</span> {address.country}</li>
                      <li><span>City:</span> {address.city}</li>
                      <li><span>Zip Code:</span> {address.zip}</li>
                      <li><span>Address:</span> {address.address}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-1 bg-white p-4 rounded shadow">
            <h5 className="text-lg">Shipping Methods</h5>
            {shippingMethods.map(method => (
              <div key={method.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="shipping_method"
                  id={`method_${method.id}`}
                  value={method.id}
                />
                <label className="form-check-label" htmlFor={`method_${method.id}`}>
                  {method.name} <span>Cost: ${method.cost.toFixed(2)}</span>
                </label>
              </div>
            ))}

            <div className="mt-4">
              <p>Subtotal: <span>$50.00</span></p>
              <p>Shipping Fee (+): <span id="shipping_fee">$0.00</span></p>
              <p>Coupon (-): <span>$5.00</span></p>
              <p><strong>Total:</strong> <strong id="total_amount">$45.00</strong></p>
            </div>

            <div className="flex items-center mt-4">
              <input type="checkbox" id="agree_terms" className="form-check-input" />
              <label htmlFor="agree_terms" className="ml-2">I have read and agree to the <Link href="#">terms and conditions *</Link></label>
            </div>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Place Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
