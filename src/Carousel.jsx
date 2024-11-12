import React from 'react';
import './Carousel.css'
function Carousel(){
  return(
    <>
      <div class="container">
        <input type="radio" name='slider' id='s1'/>
        <input type="radio" name='slider' id='s2'/>
        <input type="radio" name='slider' id='s3'/>
        <input type="radio" name='slider' id='s4'/>
        <input type="radio" name='slider' id='s5'/>
      </div>

      <div class="cards">
        <label htmlFor="s1" id='slide1'>
          <div class="card">
            <div class="image">
              <img src="./images/image1.jpg" alt="" />
              <div class="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="infos">
              <span class="name">Bharatnatyam</span>
              <span class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea, minus ut sequi laborum voluptatibus sunt, nesciunt vel saepe expedita cum. Impedit rerum ducimus sint! Excepturi at labore doloremque fugiat?</span>

              <a href="/details" class="btn-details">details</a>
            </div>
          </div>
        </label>

        <label htmlFor="s2" id='slide2'>
          <div class="card">
            <div class="image">
              <img src="./images/image1.jpg" alt="" />
              <div class="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="infos">
              <span class="name">Bharatnatyam</span>
              <span class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea, minus ut sequi laborum voluptatibus sunt, nesciunt vel saepe expedita cum. Impedit rerum ducimus sint! Excepturi at labore doloremque fugiat?</span>

              <a href="/details" class="btn-details">details</a>
            </div>
          </div>
        </label>      

        <label htmlFor="s3" id='slide3'>
          <div class="card">
            <div class="image">
              <img src="./images/image1.jpg" alt="" />
              <div class="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="infos">
              <span class="name">Bharatnatyam</span>
              <span class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea, minus ut sequi laborum voluptatibus sunt, nesciunt vel saepe expedita cum. Impedit rerum ducimus sint! Excepturi at labore doloremque fugiat?</span>

              <a href="/details" class="btn-details">details</a>
            </div>
          </div>
        </label>        

        <label htmlFor="s4" id='slide4'>
          <div class="card">
            <div class="image">
              <img src="./images/image1.jpg" alt="" />
              <div class="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="infos">
              <span class="name">Bharatnatyam</span>
              <span class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea, minus ut sequi laborum voluptatibus sunt, nesciunt vel saepe expedita cum. Impedit rerum ducimus sint! Excepturi at labore doloremque fugiat?</span>

              <a href="/details" class="btn-details">details</a>
            </div>
          </div>
        </label> 

        <label htmlFor="s5" id='slide5'>
          <div class="card">
            <div class="image">
              <img src="./images/image1.jpg" alt="" />
              <div class="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="infos">
              <span class="name">Bharatnatyam</span>
              <span class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea, minus ut sequi laborum voluptatibus sunt, nesciunt vel saepe expedita cum. Impedit rerum ducimus sint! Excepturi at labore doloremque fugiat?</span>

              <a href="/details" class="btn-details">details</a>
            </div>
          </div>
        </label> 
      </div>
    </>
  )
}
export default Carousel
