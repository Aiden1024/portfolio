import React from 'react'
import { Button } from '@nextui-org/react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Image} from "@nextui-org/react";
import ContactModal from './ContactModal';
import { useTranslation } from 'next-i18next'

const About = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { t } = useTranslation()

  return (

      <div id='about' className="w-full bg-contain bg-gradient-to-b from-primary-900 to-foreground  bg-no-repeat lg:bg-cover bg-bottom lg:bg-center lg:h-[420px] lg:bg-[url('/About/laoda1920.png')] ">
        <div className='  max-w-screen-2xl   h-full mx-auto w-full flex flex-col justify-between items-start'>
            <div className=' lg:max-w-lg max-w-xl   flex flex-col h-full justify-center  p-4 drop-shadow-md    '>
              <h2 className='  text-background text-3xl tracking-wider font-bold self-start'>{t("about", {ns:"nav"})}</h2>
              <p className=' text-background  my-4 overflow-auto scrollbar-hide'>
                {t("vmIntro", {ns:"about"})}
              </p>
              <Button variant='shadow' className=' w-fit' onPress={onOpen}>{t("beVM", {ns:"about"})}</Button>
            </div>
            <Image
              src='/About/laodaMobile.png'
              alt="laodaMobile"
              className='lg:hidden'
            />

              {/* <div className='  h-full flex-grow '>
                <Image
                        src={require('@/asset/About/laoda.png')}
                        alt='Laoda'
                      />
              </div> */}
      
        
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
        <ModalContent>
          {(onClose) => (
            <ContactModal onClose={onClose}/>
          )}
        </ModalContent>
      </Modal>
      </div>


  )
}

export default About
