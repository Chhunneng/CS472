import { Link } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';

export default function Navbar() {
  const { searchQuery, setSearchQuery } = useProduct();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Product Reviews
            </Link>
          </div>
          
          <div className="flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/products"
              className="text-gray-600 hover:text-gray-900"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 