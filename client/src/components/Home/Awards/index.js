import React from 'react'
import './style.css'
import { FaAward } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
// import { FaBookReader } from "react-icons/fa";
const AwardList = () => {
  return (
    <div className='mainAward'>
    <h1>Achievements</h1>
    <div className='award'>
      <div className="cardA">
        <FaAward fontSize={'50px'}/>
        <div className="paraN">
          <h3>IEEE Region 10 Special Recognition of Student Branch Award:</h3>
          <p className='short'>Winning the esteemed IEEE Region 10 special award for the year 2023 among 1800 colleges across 23 countries in the asia-pacific region is an invaluable success. It elevated institutions prestige on an international scale.</p>
        </div>
      </div>
      <div className="cardA">
        <BsTrophy fontSize={'50px'}/>
        <div className="paraN">
          <h3>Gold in Student Activities Committee Darrel Chong Award:</h3>
          <p className='short'>Winning the Gold in the Student Activities Committee Darrel Chong Award provided  opportunities to our students in extracurricular activities and leadership development.</p>
        </div>
      </div>
      <div className="cardA">
        <MdGroups2 fontSize={'50px'}/>
        <div className="paraN">
          <h3>1st Prize in IEEE Day Photo Contest in STEM Category:</h3>
          <p className='short threeS'>Our institutions won 1st prize and 500$ in cash in the IEEE Day photo contest in the stem category.The contest held among 160 countries worldwide took institutions recognition to the global scale and was a success beyond boundaries.</p>
        </div>
      </div>
      {/* <div className="cardA">
        <FaBookReader fontSize={'55px'}/>
        <div className="paraN">
          <p className='short'>Lorem ipsum dolor sit rporis? Quae culpa nulla autem deserunt voluptatum labore doloremque!</p>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default AwardList