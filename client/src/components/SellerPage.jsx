import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/SellerPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellerPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [stock, setStock] = useState("");

  const handleStockChange = (e) => {
    if (e.target.value < 0) {
      alert('Stock cannot be less than 0');
      setStock("");
    } else {
      setStock(e.target.value);
    }
  };

  const uploadPhoto = (e, fileSetter, imageSetter) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', fileSetter);
    formData.append("upload_preset", "exclusive");

    axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData)
      .then((response) => {
        console.log(response.data.secure_url);
        imageSetter(response.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while uploading the photo.");
      });
  };

  const addProduct = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/products/create", {
      name: name,
      price: price,
      category: category,
      description: description,
      image: image,
      image1: image1,
      image2: image2,
      image3: image3,
      stock: stock
    })
    .then((response) => { 
      console.log("result", response); 
      toast.success("Product added successfully!");
    })
    .catch((error) => { 
      console.log("result", error); 
      toast.error("An error occurred while adding the product.");
    });
  }

  return (
    <div>
      <Navbar />
      <div className="add-product-container">
        <div className="add-product-header">
          <h1>Add Product</h1>
        </div>
        <form className="add-product-form">
          <div className="add-form-group">
            <label>Name:</label>
            <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} required />
          </div>
          <div className="add-form-group">
            <label>Price:</label>
            <input type="number" name="price" onChange={(e) => { setPrice(e.target.value) }} required />
          </div>
          <div className="add-form-group">
            <label>Category:</label>
            <input type="text" name="category" onChange={(e) => { setCategory(e.target.value) }} required />
          </div>
          <div className="add-form-group">
            <label>Description:</label>
            <textarea name="description" onChange={(e) => { setDescription(e.target.value) }} required />
          </div>
          <div className="add-form-group">
            <label>Image:</label>
            <input type="file" name="image" onChange={(e) => { setFile(e.target.files[0]) }} />
            <button onClick={(e) => uploadPhoto(e, file, setImage)}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Image1:</label>
            <input type="file" name="image1" onChange={(e) => { setFile1(e.target.files[0]) }} />
            <button onClick={(e) => uploadPhoto(e, file1, setImage1)}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Image2:</label>
            <input type="file" name="image2" onChange={(e) => { setFile2(e.target.files[0]) }} />
            <button onClick={(e) => uploadPhoto(e, file2, setImage2)}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Image3:</label>
            <input type="file" name="image3" onChange={(e) => { setFile3(e.target.files[0]) }} />
            <button onClick={(e) => uploadPhoto(e, file3, setImage3)}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Stock:</label>
            <input type="number" name="stock" onChange={handleStockChange} />
          </div>
          <button type="button" className="adding-button" onClick={addProduct}>Add Product</button>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default SellerPage;
