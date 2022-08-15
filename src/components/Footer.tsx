
import '../styles/footer.css';
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

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
            <BsDiscord size={40} style={{margin:'15px',color:'white'}}/>
            <a href='https://t.me/@xDarkclaus/' target='_blank' rel="noreferrer">
              <BsTelegram size={40} style={{margin:'15px',color:'white'}}/>
            </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize:'15px' }}>
        © 2022 All copyrights reserved to Claudio Buono
        <a className='text-white' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;