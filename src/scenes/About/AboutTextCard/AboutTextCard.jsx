import { useState } from 'react';
import s from './AboutTextCard.module.scss';
import { ImPointRight, ImStarFull } from 'react-icons/im';
import { CCollapse , CButton } from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutTextCard = () => {

  const [visible_flag, setVisible] = useState(false);

  return (
    <div className={s.card}>
      <ul>
      
        <li className={s.aboutActivity}>
          <b>Market Data, Charting and Tarding API integration</b>
          <p style={{ textAlign: 'justify' }}>
            <span className={s.purple}> Roshan S: </span>The developer delivered exceptional results on the freelancer project, showcasing a high level of skill, efficiency, and attention to detail. Their communication was clear and responsive throughout, making the collaboration a seamless and positive experience.
            <br /> <ImPointRight /><span style={{ color: '#e60278' }}> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> </span> 5.0

          </p>
        </li>
        <li className={s.aboutActivity}>
          <b>Personality Test Bot - React Dev Needed</b>
          <p style={{ textAlign: 'justify' }}>
            <span className={s.purple}> Arslan M:  </span>I am very happy to work with you. You are open to changes, fixes and revisions as well that was the best part of the project.
            <br /><ImPointRight /><span style={{ color: '#e60278' }}> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> </span> 5.0
            <br />

          </p>
        </li>
     
      <CCollapse visible={visible_flag}>
      <li className={s.aboutActivity}>
          <b>Draw dialog bubble using WebGL</b>
          <p style={{ textAlign: 'justify' }}>
            <span className={s.purple}> Andrew Z:  </span>Very smart. good skills. will hire him again
            <br /> <ImPointRight /><span style={{ color: '#e60278' }}> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> </span> 5.0
          </p>
        </li>
          <li className={s.aboutActivity}>
            <b>Need help with adding parenthesis and dashes to phone number input (react, zod, javascript, shad ui)</b>
            <p style={{ textAlign: 'justify' }}>
              <span className={s.purple}> Sam L:  </span>It was a pleasure working with Mykhailo. He is a very skilled programmer and it shows in his code and speed in delivery. Would definitely work with again. Thank you Mykhailo!!
              <br /><ImPointRight /><span style={{ color: '#e60278' }}> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> </span> 5.0

            </p>
          </li>

          <li className={s.aboutActivity}>
            <b>Combine data from two XML files and export combined data</b>
            <p style={{ textAlign: 'justify' }}>
              <span className={s.purple}> Teodor P:  </span>Perfect job. Amazing knowledge and communications. Definitely I recommend Mykhailo.
              <br /><ImPointRight /><span style={{ color: '#e60278' }}> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> </span> 5.0

            </p>
          </li>
      </CCollapse>
      <CButton className={s.CButton}  onClick={(event) => { setVisible(!visible_flag);}} >  {visible_flag ? "Less": "More"} </CButton>

        </ul>
    </div>
  );
};

export default AboutTextCard;
