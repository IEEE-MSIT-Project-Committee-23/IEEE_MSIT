import React from 'react';
import './style.css';

function AboutUsComponent() {
    return (
        <div className="about_us" id="about">
            <div className="header_aboutUs text-dark-emphasis ">
                <h1>About IEEE</h1>
            </div>
            <div className="body_aboutUs">
                <img src="https://i.postimg.cc/jSZQj1y9/Image-4-1.png" alt="image not found" />
                <p className='text-dark-emphasis'>
IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.<br></br> 
IEEE's roots go back to 1884 when electricity began to become a major influence in society. There was one major established electrical industry, the telegraph, which since the 1840s had come to connect the world with a data communications system faster than the speed of transportation.
IEEE, pronounced "Eye-triple-E," stands for the Institute of Electrical and Electronics Engineers. The organization is chartered under this name and it is the full legal name.
                </p>
            </div>
            <h1>Regions of IEEE</h1>
            <div class="card-row">
                <div class="card1" style= {{padding: "20px" , fontWeight: "bold"}}>Northeastern US</div>
                <div class="card1" style= {{fontWeight: "bold"}}>Eastern US</div>
                <div class="card1" style= {{padding: "20px" , fontWeight: "bold"}}>Southwestern US</div>
                <div class="card1" style= {{fontWeight: "bold"}}>Southern US</div>
                <div class="card1" style= {{fontWeight: "bold"}}>Central US</div>
                <div class="card1" style= {{fontWeight: "bold"}}>Western US</div>
                <div class="card1" style= {{fontWeight: "bold"}}>Canada</div>
                <div class="card1" style= {{ padding: "20px", fontWeight: "bold"}}>Latin America</div>
                <div class="card1" style= {{padding: "20px" , fontWeight: "bold"}}>Africa, Europe, MiddleEast</div>
                <div class="card10" style= {{padding: "20px" , fontWeight: "bold"}}>Asia and Pacific</div>
            </div>
            <h1>Asia and Pacific</h1>
            <h4 className='text-dark-emphasis'>
The Asia Region of IEEE encompasses a diverse landscape of technological innovation and collaboration, serving as a hub for knowledge exchange and professional growth. Within this region, the Indian subcontinent stands out for its significant contributions to technology and innovation, hosting a vibrant engineering community engaged in cutting-edge research and development. Within India, the IEEE Delhi Section plays a crucial role in fostering collaboration and excellence, organizing various technical events and initiatives to drive innovation and societal impact in Delhi and its surrounding areas</h4>
            <br></br>
            <h1>Delhi Region of IEEE</h1>
            <br></br>
            <div className="body_aboutUsclg">
                <img src="https://www.msit.in/static/img/mainPage/slide_9.jpg" alt="image not found" />
                <p className='text-dark-emphasis'>
                The IEEE Delhi Section encompasses an extensive network of leading educational institutions, including the Indian Institute of Technology (IIT) Delhi, Delhi Technological University (DTU), Netaji Subhas University of Technology (NSUT), Guru Gobind Singh Indraprastha University (GGSIPU), and <b style={{color:"#019EC3"}}>Maharaja Surajmal Institute of Technology (MSIT) </b>. MSIT, like other institutions, is an integral part of the vibrant student community associated with IEEE in the Delhi region. Through collaborative efforts and various initiatives, IEEE Delhi Section fosters innovation and academic excellence, providing platforms for knowledge exchange, skill development, and collaborative projects across its member institutions.The students at MSIT actively participate in various IEEE activities, including workshops, seminars, and technical competitions, leveraging these opportunities to enhance their skills and knowledge in diverse fields of engineering and technology. As part of the IEEE community in Delhi, MSIT students engage in collaborative projects, research endeavors, and industry interactions,
                contributing to the overall advancement of technology and engineering in the region.

                </p>
            </div>
            <div className='footer_aboutUs'>
              <img src="https://i.postimg.cc/2SWpn4SC/1-CS-1.png" alt="image not found" style={{height: "150px"}}/>
              <img src="https://i.postimg.cc/nLZDJGsz/3-RAS-1.png" alt="image not found" style={{height: "150px"}} />
              <img src="https://i.postimg.cc/HnfrPwDT/4-WIE-1.png" alt="image not found" />
            </div>
        </div>
    );
}

export default AboutUsComponent;

