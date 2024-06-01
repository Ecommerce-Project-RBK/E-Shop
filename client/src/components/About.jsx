import React, { useState } from 'react';
import '../CSS/About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const About = () => {
    const [file, setPhoto] =useState(null)
    const [file2, setPhoto2] =useState(null)
    const [file3, setPhoto3] =useState(null)
    const [file4, setPhoto4] =useState(null)
    const [image, setImage] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const uploadPhoto1 = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append("upload_preset", "agenceFactory")
    
        axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
          console.log(response.data.secure_url)
          console.log(file)
          setImage(response.data.secure_url)
        }).catch((err) => {
          console.log(err)
        });
      };

      const uploadPhoto2 = () => {
        const formData = new FormData()
        formData.append('file', file2)
        formData.append("upload_preset", "agenceFactory")
    
        axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
          console.log(response.data.secure_url)
          console.log(file)
          setImage2(response.data.secure_url)
        }).catch((err) => {
          console.log(err)
        });
      };

      const uploadPhoto3= () => {
        const formData = new FormData()
       formData.append('file', file3)
   
        formData.append("upload_preset", "agenceFactory")
    
        axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
          console.log(response.data.secure_url)
          console.log(file)
          setImage3(response.data.secure_url)
        }).catch((err) => {
          console.log(err)
        });
      };
      const uploadPhoto4= () => {
        const formData = new FormData()
        formData.append('file', file4)
        formData.append("upload_preset", "agenceFactory")
    
        axios.post(`https://api.cloudinary.com/v1_1/dcyeimdps/upload`, formData).then((response) => {
          console.log(response.data.secure_url)
          console.log(file)
          setImage4(response.data.secure_url)
        }).catch((err) => {
          console.log(err)
        });
      };



  return (<div>
    <Navbar/>
    <div className="our-story-container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>About</span>
      </div>
      <div className="our-story-content">
        <div className="text-section">
          <h2>Our Story</h2>
          <p>
            Exclusive has more than 1 million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        <div className="image-section">
          <img src="https://i.pinimg.com/originals/f6/2e/c3/f62ec33251d6e4f1555cdfbd53acadbe.gif" alt="Our Story" />
        </div>
      </div>
      <div className="stats-section">
        <div className="stat">
          <p>10.5k</p>
          <span>Sellers active our site</span>
        </div>
        <div className="stat highlight">
          <p>33k</p>
          <span>Monthly Product Sale</span>
        </div>
        <div className="stat">
          <p>45.5k</p>
          <span>Customer active in our site</span>
        </div>
        <div className="stat">
          <p>25k</p>
          <span>Annual gross sale in our site</span>
        </div>
      </div>
      <div className="team-section">
        <div className="team-member">
          <img src={image} alt="Tom Cruise"  />
          <p className="name">ahmed Gafsi</p>
          <p className="position">Founder & Chairman</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <input type="file"  onChange={(e) => { setPhoto(e.target.files[0]) }} />
            <button onClick={()=>uploadPhoto1()}>upload</button>
          </div>
        </div>
        <div className="team-member">
          <img src={image2} alt="Scrum" />
          <p className="name">Aziz chinguiti</p>
          <p className="position">Managing Director</p>
          <div className="social-icons">
            <i className="fab fa-twitter"  ></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <input type="file" onChange={(e) => { setPhoto2(e.target.files[0]) }} />
            <button onClick={()=>uploadPhoto2()}>upload</button>
          </div>
        </div>
        <div className="team-member">
          <img src={image3} alt="member" />
          <p className="name">Raslen Bouallueg</p>
          <p className="position">Product Designer</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <input type="file"  onChange={(e) => { setPhoto3(e.target.files[0]) }} />
            <button onClick={()=>uploadPhoto3()}>upload</button>
          </div>
        </div>
        <div className="team-member">
          <img src={image4} alt="" />
          <p className="name">slim Ben said</p>
          <p className="position">Managing </p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <input type="file"  onChange={(e) => { setPhoto4(e.target.files[0]) }} />
            <button onClick={()=>uploadPhoto4()}>upload</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;