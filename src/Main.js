import React from 'react';

const Main = () => {
  const goDown=(e)=>{
    
  }
  return (
    <>
      <div className="section1 paralax">
        <h1 id="first">
          Musa Sahin
          <br />
          Kundakcı
        </h1>
        <div className="contact-links">
          <a
            class="fab fa-linkedin me-4"
            href="https://www.linkedin.com/in/musa-şahin-kundakci-2184271b4/"
          />
          <a
            class="fab fa-github me-4"
            href="https://github.com/musasahinkundakci"
          />
          <a
            class="fab fa-stack-overflow me-4"
            href="https://stackoverflow.com/users/15249809/musa"
          />
          <a
            class="fab fa-hackerrank me-4"
            href="https://www.hackerrank.com/musa_20"
          />
          <a
            href="https://www.instagram.com/musasahin.21/?hl=tr"
            class="fab fa-instagram me-4"
          ></a>
          <a
            href="https://codepen.io/musasahinkundakci"
            class="fab fa-codepen"
          ></a>
        </div>
        <div class="fas fa-angle-double-down toBottom" onClick={goDown}></div>
        <div className="section2 paralax">
          <h1 id="second">ME</h1>
          <div className="me-5">
            <span id="about-text">
              I'm a turkish student, passionated about datascience and web
              technologies,but ı think artificial intelligence and computer
              vision will be my main focus.
            </span>
            <br />
            <span id="about-tag">Freelance Software Developer</span>
          </div>
          <img src="/a.svg" alt="" />
        </div>
      </div>
      <div className="section3 paralax">
        <h1>The Things I know </h1>
      </div>
      <div className="section4">
        <div>
          <img
            src="https://akademi.bilgeadam.com/wp-content/uploads/2021/01/application-development-with-python.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/1200px-OpenCV_Logo_with_text_svg_version.svg.png"
            alt=""
          />
          <img
            src="https://digitalreport.com.tr/wp-content/uploads/2020/12/kali-linux-nedir-kurulumu-nasil-yapilir.jpg"
            alt=""
          />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="https://ichi.pro/assets/images/max/724/1*XP-mZOrIqX7OsFInN2ngRQ.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
            alt=""
          />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png"
            alt=""
          />
          <img
            src="data:image/jpeg;base64,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duueF+M3ymgUAAAAbgBJjhe7dZ55zWoqRETZiREQEREBI52y6HxGLwtFMPRaoy1SxCC5C5GFz5kSRZ9kHLP/AAFpP+wVvqj758/4D0n/AGCt9X/edTxKI62N6HxGEwlZMRRemzVs4DixK5FFx5gyRYiAiIgIiICIiAmD1p1bo6Rw5oVgeOZHW2ZG5Mp+I5zORA580vsex1Ik0Gp115WYI/mrdX/VNfqbP9JqbHA1PLK3vBM6jiBy7R2eaUc2GBqfrFF97MJs2hdjeLqMDiaiUU3EhTnqd4AHVHjcyfIgYPVrVqho6j0NBLXsWc73ZhzY8+4cBM5EQEREBERAREQEREBERAoYnDJUUo6K6ncVYAg+RmtYjZ7o5zf5Nl+g9RR5ANYeU2uJNLLZ6aguzfRo/qGPjVq/xR/Jvo3/AKDf5tX+KbfEah3VgdG6o4HDMGp4VAw4M13YeBYkjymeiJU2+xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            alt=""
          />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/269f2bcf-4608-410f-b950-291773ee9f2f/104.jpg?1640265842460"
            alt=""
          />
        </div>
      </div>
      <div className="footer paralax">
        <div className="footer-madeby ">
          Made by{' '}
          <a href="https://www.linkedin.com/in/musa-şahin-kundakci-2184271b4/">
            musasahinkundakci
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
