import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import './Formulaire.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_jry1ijp";
const TEMPLATE_ID = "template_w8tjjab";
const USER_ID = "pLVDbNN28NO1KEvP7";


const Formulaire = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Envoyé avec Succès'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, Quelque chose semble mal fonctionner',
              text: error.text,
            })
          });
        e.target.reset()
      };

  return (
    <div className='formulaire'>
    <p>Nous contactez à travers ce formulaire. Nous reprendrons contact
    avec vous rapidement afin de vous fournir le meilleur service</p>
        <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Nom'
          name='user_name'
          placeholder='Nom…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
        id='form-input-control-phone'
        control={Input}
        label='Contact'
        name='user_contact'
        placeholder='Votre contact'
        required
        icon='mobile alternate'
        iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Votre projet en quelques lignes…'
          required
        />
        <Button type='submit' color='green'>Envoyer</Button>
      </Form>
    </div>
  )
}

export default Formulaire