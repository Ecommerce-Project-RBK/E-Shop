import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/SellerPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

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
  const [itemAdded, setItemAdded] = useState(false);

  const handleStockChange = (e) => {
    if (e.target.value < 0) {
      alert('Stock cannot be less than 0');
      setStock("");
    } else {
      setStock(e.target.value);
    }
  };

  const uploadPhoto1 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "exclusive");

    axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
      console.log(response.data.secure_url);
      console.log(file);
      setImage(response.data.secure_url);
    }).catch((err) => {
      console.log(err);
    });
  };

  const uploadPhoto2 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file1);
    formData.append("upload_preset", "exclusive");

    axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
      console.log(response.data.secure_url);
      console.log(file1);
      setImage1(response.data.secure_url);
    }).catch((err) => {
      console.log(err);
    });
  };

  const uploadPhoto3 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file2);
    formData.append("upload_preset", "exclusive");

    axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
      console.log(response.data.secure_url);
      console.log(file2);
      setImage2(response.data.secure_url);
    }).catch((err) => {
      console.log(err);
    });
  };

  const uploadPhoto4 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file3);
    formData.append("upload_preset", "exclusive");

    axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
      console.log(response.data.secure_url);
      console.log(file3);
      setImage3(response.data.secure_url);
    }).catch((err) => {
      console.log(err);
    });
  };

  function addProduct(e) {
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
      setItemAdded(true); 
      setTimeout(() => {
        setItemAdded(false); 
      }, 3000);
    })
    .catch((error) => { 
      console.log("result", error); 
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
            <button onClick={uploadPhoto1}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Image1:</label>
            <input type="file" name="image1" onChange={(e) => { setFile1(e.target.files[0]) }} />
            <button onClick={uploadPhoto2}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Image2:</label>
            <input type="file" name="image2" onChange={(e) => { setFile2(e.target.files[0]) }} />
            <button onClick={uploadPhoto3}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Image3:</label>
            <input type="file" name="image3" onChange={(e) => { setFile3(e.target.files[0]) }} />
            <button onClick={uploadPhoto4}>Upload</button>
          </div>
          <div className="add-form-group">
            <label>Stock:</label>
            <input type="number" name="stock" onChange={handleStockChange} />
          </div>
          <button type="button" className="adding-button" onClick={addProduct}>Add Product</button>
          {itemAdded && <div className="item-added-message">Item added!</div>} {/* Display "Item added!" message */}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SellerPage;
