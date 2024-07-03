import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { Button, Card, CardBody, Input, Link, Image as NextImage, Textarea } from '@nextui-org/react'
import { useState } from 'react';
import { postSendEmail } from '@/utils/APIs'
import { useTranslation } from 'next-i18next'


const ContactModal = ({onClose = () => {}}) => {

    const { t } = useTranslation()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isLoading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const primaryBtn = {
        color: 'primary',
        disabled: false,
        text:t("submit", {ns:"contactModal"}),
        
    }

    const successBtn = {
        color: 'success',
        disabled: true,
        text:t("submitted", {ns:"contactModal"})
    }


    const [btnStyle, setBtnStyle] = useState(primaryBtn)

    const VMascii = `   
    .##.....##.##.....##
    .##.....##.###...###
    .##.....##.####.####
    .##.....##.##.###.##
    ..##...##..##.....##
    ...##.##...##.....##
    ....###....##.....##
    `

    const contentMsg = `

   
    Message From VM HomagePage Contact
                                                           
          
    Name: ${name}
    Email: ${email}
    
    Message: 
    ${message}

    @2024 VM - Homepage
    Ascii Art by Aiden UwU
    ${VMascii}
    `;
    

    
    async function handleSendEmail() {
        if (name === '' ){
            setNameErrorMessage(t("enterName", {ns:"contactModal"}));
            return
        }

        if (email === '' ){
            setEmailErrorMessage(t("enterEmail", {ns:"contactModal"}));
            return
        }
        try {
          setIsloading(true);
          const res = await postSendEmail(contentMsg);
          if (res.status === 200) {
            setBtnStyle(successBtn);
            setIsloading(false)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            onClose();
            setBtnStyle(primaryBtn)
          } else {
            // Handle error case
            setErrorMessage(t("errSend", {ns:"contactModal"}));
          }
          setIsloading(false);
        } catch (error) {
          setIsloading(false);
          console.error('Error sending email:', error);
          // Handle error case
        }

      }
      
  return (
    <>
    <ModalHeader className="flex flex-col gap-1">{t("contactUs", {ns:"contactModal"})}</ModalHeader>
    <ModalBody>
      <div className=' w-full h-full flex flex-col gap-4'>
          <Input errorMessage={nameErrorMessage} isInvalid={nameErrorMessage !== ''}  {...{isRequired: true}} label={t("name", {ns:"contactModal"})}value={name} onValueChange={setName} />
          <Input errorMessage={emailErrorMessage} isInvalid={emailErrorMessage !== ''}  isRequired label={t("email", {ns:"contactModal"})} value={email} onValueChange={setEmail} type='email' />
          <Textarea  minRows={10} label={t("message", {ns:"contactModal"})} value={message} onValueChange={setMessage} errorMessage={errorMessage} />
          
      </div>
    </ModalBody>
    <ModalFooter>

      <Button isLoading={isLoading} className=" text-foreground" isDisabled={btnStyle.disabled} color={btnStyle.color} fullWidth onPress={handleSendEmail}>
        {btnStyle.text}
      </Button>
    </ModalFooter>
  </>
  )
}

export default ContactModal
