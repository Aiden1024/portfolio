'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import { TbArrowRight } from "react-icons/tb";
import Image from 'next/image';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
// import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
})

import { useEffect } from 'react';
import { useTheme } from 'next-themes';


const Home = () => {

  const { t } = useTranslation()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setTheme("dark")

  }, []);

  return (
    <div className="bg-[url('/portfolio/BG/dark.jpg')] bg-center bg-fixed bg-cover w-full h-full ">
      <div id="home"  className="flex flex-col lg:flex-row min-h-screen mx-auto max-w-screen-2xl px-4 items-center justify-center lg:justify-between gap-4  w-full  h-full -mt-16">
        <div className=' flex flex-col gap-1 items-start text-start max-w-screen-lg w-full '>
        <h2 className=' text-3xl tracking-wider '>{t("slogan", {ns: "home"})}</h2>
          <div className=' flex flex-col text-6xl lg:text-7xl leading-none'>
              <h2 className=''>{t("vm", {ns:"home"})}</h2>
          </div>
          <h3>{t("slogan2", {ns:"home"})}</h3>
      
          {/* <h1>{t("HELLO_WORLD")}</h1> */}
          {/* <Button size='lg' color="primary" variant='shadow' className=' lg:hidden  rounded-large py-9' onPress={onOpen} startContent={
              <div className=' shadow-large rounded-full text-foreground-900 bg-background p-3 text-2xl'>
                  <TbArrowRight/>
              </div>
          } ><h2 className=' text-xl tracking-widest font-bold'>百闻不如一见</h2></Button> */}
        </div>
        <div className='relative group  rounded-large overflow-hidden  '>
          <div className=' absolute h-full w-1/6 bg-gradient-to-r from-background to-transparent left-0 z-30  group-hover:opacity-0 duration-300'></div>
      
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl' placement='center' backdrop='blur' classNames={{closeButton:"hidden"}}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Vision Matrix</ModalHeader>
                <ModalBody>
                <div className=' size-full rounded-medium overflow-hidden'>
                  <ReactPlayer url='https://vms-post-img.s3.ap-southeast-1.amazonaws.com/1080_group+VM+video_3mins.mp4'
                  playing
                    controls={true}
                    height={"100%"}
                    width={"100%"} />
                </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export default Home



