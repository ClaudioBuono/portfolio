
import {BsGithub, BsLinkedin,BsInstagram} from 'react-icons/bs'
import {MDBFooter,MDBContainer,} from 'mdb-react-ui-kit';

import '../styles/footer.css';


function Footer() {
  return (
    <MDBFooter className='footer text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 socialButtons'>
            <a href='https://github.com/ClaudioBuono' target='_blank' rel="noreferrer">
              <BsGithub size={40} style={{margin:'15px',color:'white'}}/>
            </a>
            
            <a href='https://www.instagram.com/claudio.buono01/' target='_blank' rel="noreferrer">
              <BsInstagram size={40} style={{margin:'15px',color:'white'}}/>
            </a>
            <a href='https://www.linkedin.com/in/claudio-buono-39564931a/' target='_blank' rel="noreferrer">
            <BsLinkedin size={40} style={{margin:'15px',color:'white'}}/>
            </a>
            
            
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize:'15px' }}>
        © 2024 All copyrights reserved to Claudio Buono
      </div>
    </MDBFooter>
  );
}

export default Footer;