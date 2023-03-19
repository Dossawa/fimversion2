import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Prenez contact avec nous sur les réseaux sociaux :</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='text-white'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                FIM
              </h6>
              <p>
                Nous sommes spécialisé dans la fourniture de matériel industriel et le marquage
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Réseaux Sociaux</h6>
              <p>
                <a href='https://web.facebook.com/profile.php?id=100087452690420&mibextid=ZbWKwL&_rdc=1&_rdr' target={'_blank'} className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Instagram
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/company/fim-fourniture-industrielle-et-maintenance/' target={'_blank'} className='text-reset'>
                  LinkedIn
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Liens vers</h6>
              <p>
                <a href='/' className='text-reset'>
                  Accueil
                </a>
              </p>
              <p>
                <a href='#propos' className='text-reset'>
                  A propos
                </a>
              </p>
              <p>
                <a href='#produits' className='text-reset'>
                  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>ADRESSE</h6>
              <p>
                Yopougon - Cité Bel air du banco
              </p>
              <p>
              08 BP 2799 Abidjan 08
              </p>
              <p>
                Email :  directionfim9@gmail.com
              </p>
              <p>
                Tel : +225 05 05 40 61 72
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold text-white' href='https://mdbootstrap.com/'>
          FIM
        </a>
      </div>
    </MDBFooter>
  );
}