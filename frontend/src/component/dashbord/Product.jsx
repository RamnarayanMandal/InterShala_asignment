import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = ({showModal}) => {
  const [dishes, setDishes] = useState([
    {
      "dishName": "Jeera Rice",
      "dishId": "1",
      "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
      "isPublished": true
    },
    {
      "dishName": "Paneer Tikka",
      "dishId": "2",
      "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
      "isPublished": true
    },
    {
      "dishName": "Rabdi",
      "dishId": "3",
      "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
      "isPublished": true
    },
    {
      "dishName": "Chicken Biryani",
      "dishId": "4",
      "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
      "isPublished": true
    },
    {
      "dishName": "Alfredo Pasta",
      "dishId": "5",
      "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
      "isPublished": true
    }
  ]);

  const fetchItems = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/api/v1/product");
      setDishes(prevDishes => [...prevDishes, ...resp.data]);
      console.log(dishes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [showModal]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dishes.map(dish => (
          <div key={dish.dishId} className="bg-white rounded hover:shadow-lg shadow-sm overflow-hidden hover:shadow-black shadow-black cursor-pointer">
            <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{dish.dishName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
