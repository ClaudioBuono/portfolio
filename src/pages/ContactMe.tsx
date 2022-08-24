import { Button, TextField } from '@mui/material';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import { useToasts } from 'react-toast-notifications';

// Socials icons
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

import '../styles/contact.css'

function ContactMe () {
    
    const { addToast } = useToasts();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dvl6m9d', 'template_8xsdf3d', e.target, 'Ya6zxfGxeLv8TrxzK')
          .then((result) => {
              console.log(result.text);
              addToast('Sent Successfully', {appearance: 'success',autoDismiss: true, });
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };



    return ( 
        <Fade right>
            <div className="ContactMainContainer">
                <div className="ContactMeLabel">
                    Contact me
                </div>
                <div className="ContactMeDescription">
                    Let's get in touch, and make something special together!
                </div>
                <form onSubmit={sendEmail}>
                <div className="ContactFormContainer">
                
                    <table>      
                        <tbody>                    
                        <tr>
                            <th>
                                <TextField name="name" className="ContactMeInputText" id="outlined-basic" label="Name" variant="outlined" />
                                <TextField name="surname" className="ContactMeInputText" id="outlined-basic" label="Surname" variant="outlined" />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <TextField name="email" className="ContactMeInputText emailInput" id="outlined-basic" label="Email" variant="outlined" />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <TextField name="message" className="ContactMeInputText emailInput" id="outlined-basic" label="Message" variant="outlined" multiline rows={5} />
                            </th>
                        </tr>
                        <tr>
                            <th style={{textAlign:"center"}}>
                                <Button type="submit" variant="contained" className='contactSubmitButton hvr-grow'>Send</Button>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                    
                </div>
                </form>
                
                <div className='socialMediaButtonsContainer'>
                  <p>MY SOCIALS</p>
                    <section className='mb-4 socialButtons '>
                        <a href='https://github.com/ClaudioBuono' className="hvr-grow" target='_blank' rel="noreferrer">
                            <BsGithub size={40} style={{margin:'15px',color:'white'}}/>
                        </a>
                        <a href='https://www.instagram.com/claudio.buono01/' className="hvr-grow" target='_blank' rel="noreferrer">
                            <BsInstagram size={40} style={{margin:'15px',color:'white'}}/>
                        </a>
                            <BsDiscord size={40} className="hvr-grow" style={{margin:'15px',color:'white'}}/>
                        <a href='https://t.me/@xDarkclaus/' className="hvr-grow" target='_blank' rel="noreferrer">
                            <BsTelegram size={40} style={{margin:'15px',color:'white'}}/>
                         </a>
                    </section>
                </div>
            </div>   
        </Fade>
     );
     
}

export default ContactMe ;