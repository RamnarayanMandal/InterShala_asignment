import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'; // Ensure you have SweetAlert2 styles

export default function AddItemsModal({ setShowModal }) {
  const [dishName, setDishName] = useState('');
  const [image, setImage] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('imageUrl', image);
    formData.append('dishName', dishName);
    formData.append('isPublished', isPublished);

    try {
      const response = await axios.post('http://localhost:8000/api/v1/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImageUrl(response.data.imageUrl);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Item added successfully!',
      });
      setShowModal(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error uploading image. Please try again.',
      });
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Dish Name</label>
            <input
              type="text"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Publish</label>
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="mt-1"
            />
          </div>
          <div className="flex justify-end gap-5">
            <button
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Item'}
            </button>
          </div>
        </form>
        {loading && (
          <div className="mt-4 text-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {imageUrl && (
          <div className="mt-4">
            <p>Image uploaded:</p>
            <img src={imageUrl} alt="Uploaded" className="mt-2 max-w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
