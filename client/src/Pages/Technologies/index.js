import React from 'react'
import './style.css';
// import Navbar from '../components/Navbar'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const Tech = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="cont">
        <input type="checkbox" id="checkbox-cover" />
        <input type="checkbox" id="checkbox-page1" />
        <input type="checkbox" id="checkbox-page2" />
        <input type="checkbox" id="checkbox-page3" />
        <div className="book">
            <div className="cover">
                <label for="checkbox-cover"></label>
            </div>
            <div className="page" id="page1">
                <div className="front-page">
                    <h2>APPLE VISION PRO</h2>
                    <section className="seLeft">
                        <div className="food">
                            <img src="https://www.zdnet.com/a/img/resize/85823bc5d41892a092fb21be0f4254f1d9852b7c/2023/06/07/a8cc81a6-5456-4576-ad17-c616eb8bbf27/dsc09860.jpg?auto=webp&width=1280" alt="" />
                        </div>
                        <div className="para">
                            <p className="small">Apple Vision Pro is Apple's first 3D camera.You can capture magical spatial photos and spatial videos in 3D,then relive thosecherished moments like never before with immersive spatial audio.</p>
                        </div>
                    </section>
                    <section className="seRight right1">
                        <div className="para">
                            <p className="small">Control Apple Vision Pro with your eyes,hands and voice-interactions feel intuitive and magical.Look at an element,tap your fingers together to select,and use the virtual keyboard or dictation to type.</p>
                        </div>
                        <div className="food">
                            <img src="https://i.wfcdn.de/teaser/1920/64661.jpg" alt="" srcset="" />
                        </div>
                    </section>
                    <section className="seLeft">
                        <div className="food">
                            <img src="https://images.wsj.net/im-918815?width=620" alt="" />
                        </div>
                        <div className="para">
                            <p className="small">Environments let you transfer the space around you,so apps can extend beyond the dimensions of your room.Choose from a selection of beautiful landscapes,or turn your room into a personal movie theatre with the Cinema environment.</p>
                        </div>
                    </section>
                    <label className="next" for="checkbox-page1"><MdOutlineArrowForwardIos /></label>
                </div>
                <div className="back-page">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*XpCMaMrVB-7GvaoH-YjIbg.png"/>
                    <label className="prev" for="checkbox-page1"><MdOutlineArrowBackIosNew /></label>
                </div>
            </div>
            <div className="page" id="page2">
                <div className="front-page">
                    <h2 style={{color:'yellow'}}>YOUR PERSONAL THEATRE USING APPLE APPLE VISION PRO</h2>
                    <p style={{color:'white',marginTop:'6px',lineHeight:'22px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!</p>
                    <label className="next" for="checkbox-page2"><MdOutlineArrowForwardIos /></label>
                </div>
                <div className="back-page">
                    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8u4MyUMbqn0/v1/-1x-1.jpg"/>
                    <label className="prev" for="checkbox-page2"><MdOutlineArrowBackIosNew /></label>
                </div>
            </div>
            <div className="page" id="page3">
                <div className="front-page">
                    <h2 style={{color:'yellow'}}>SEAMLESS COLLABRATION AND CONNECTION USING APPLE VISION PRO</h2>
                    <p style={{color:'white',marginTop:'6px',lineHeight:'22px'}}>Stay connected and collaborate effortlessly</p>
                </div>
            </div>
            <div className="back-cover"></div>
        </div>
      </div>
    </>
  )
}
export default Tech