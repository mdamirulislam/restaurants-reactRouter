import React from 'react';
import { useHistory } from 'react-router';
import './About.css'

const About = () => {
    const history = useHistory();
    const handleHistory = () =>{
        history.push('/home')
    }
    return (
        <div className='container mt-5'>
            <div className='row d-flex align-items-center'>
            <div className='col-md-4'>
                <h2>Assalamu Alaikum i'm <span className='color'>Amirul</span> Islam </h2>
                <h3><span className='color'>WELCOME</span> to my Dreem Shop</h3>
                <button onClick={handleHistory}>Go Back</button>
            </div>
          <div className='col-md-8'>
          <div className='carousel-div'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img clas src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg" className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg" className=" " alt="..."/>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default About;