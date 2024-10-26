import React from 'react';
import Link from 'next/link';

const vendors = [
  {
    id: 1,
    shop_name: "Vendor One",
    phone: "123-456-7890",
    email: "vendor1@example.com",
    banner: "/path/to/banner1.jpg",
  },
  {
    id: 2,
    shop_name: "Vendor Two",
    phone: "098-765-4321",
    email: "vendor2@example.com",
    banner: "/path/to/banner2.jpg",
  },
  // Add more vendor objects as needed
];

const VendorsPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb Section */}
      <section id="wsus__breadcrumb" className="bg-gray-200 py-4">
        <div className="text-center">
          <h4 className="text-xl">Vendors</h4>
          <ul className="flex justify-center space-x-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="text-gray-500">/ Vendors</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Vendors Section */}
      <section id="wsus__vendor_page" className="wsus__vendors mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vendors.map(vendor => (
            <div key={vendor.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={vendor.banner} alt="vendor" className="img-fluid w-full" />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{vendor.shop_name}</h4>
                <a href={`tel:${vendor.phone}`} className="text-gray-700">
                  <i className="far fa-phone-alt"></i> {vendor.phone}
                </a>
                <br />
                <a href={`mailto:${vendor.email}`} className="text-gray-700">
                  <i className="fal fa-envelope"></i> {vendor.email}
                </a>
                <br />
                <Link href={`/vendor/${vendor.id}`}>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Visit Store
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-5">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

export default VendorsPage;
