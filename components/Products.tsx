import React from 'react'
import { Button, Card, CardBody, Input, Link, Image as NextImage, Textarea } from '@nextui-org/react'
import Image from 'next/image';

import { SiGoogleplay, SiApple } from "react-icons/si";
import { DiAndroid, DiApple, DiWindows  } from "react-icons/di";
import { TbDeviceMobile, TbDeviceDesktop, TbDeviceTablet } from "react-icons/tb";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import ContactModal from "./ContactModal";
import { useTranslation } from 'next-i18next'

const Products = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { t } = useTranslation()

    const ProductList = [
        {
          name: t("product1", { ns: "products" }),
          subtitle: t("subtitle1", { ns: "products" }),
          description: t("description1", { ns: "products" }),
          platforms: [
            <TbDeviceMobile />,
            <TbDeviceTablet />,
            <TbDeviceDesktop />,
          ],
          footer: (
            <div className=" flex flex-col items-end w-full trans-text-bt ">
              <Button
                className=""
                color="primary"
                variant="shadow"
                radius="full"
                onPress={onOpen}
              >
                {t("contactUs", { ns: "products" })}
              </Button>
            </div>
          ),
          image: "Products/MVSE/MVSE_cover.jpg",
          coverLogo: "Products/MVSE/MVSE_LOGO.png",
          gradient:
            "from-background to-primary-300 opacity-70 group-hover:opacity-90 ",
        },
        {
          name: t("product2", { ns: "products" }),
          subtitle: t("subtitle2", { ns: "products" }),
          description: t("description2", { ns: "products" }),
          platforms: [
            <TbDeviceMobile />,
            <TbDeviceTablet />,
            <TbDeviceDesktop />,
          ],
          footer: (
            <div className=" flex flex-col items-end w-full trans-text-bt ">
              <Button
                className=" text-foreground"
                color="success"
                variant="shadow"
                radius="full"
                as={Link}
                isExternal={true}
                href="https://speechwizard.vision-matrix.com/Home"
              >
                {t("tryProduct", { ns: "products" })}
              </Button>
            </div>
          ),
          image: "/Products/SPWZ/SW_cover_v3.jpg",
          coverLogo: "/Products/SPWZ/SW_LOGO.png",
          gradient:
            "from-background to-success-300 opacity-70 group-hover:opacity-90 ",
        },
        {
          name: t("product3", { ns: "products" }),
          subtitle: t("subtitle3", { ns: "products" }),
          description: t("description3", { ns: "products" }),
          platforms: [
            <DiApple />,
            <DiAndroid />,
            <TbDeviceMobile />,
          ],
          footer: (
            <div className=" flex flex-col items-end w-full trans-text-bt ">
              <div className=" lg:flex flex-row gap-4 justify-end hidden ">
                <div className=" flex flex-col items-center gap-2">
                  <NextImage
                    alt="AppleStore image"
                    className="object-cover xl:size-24 size-16  "
                    radius="none"
                    src={"Products/VMSearch/AppleStore.png"}
                  />
                  <div className=" flex items-center gap-2 text-sm text-nowrap">
                    <SiApple /> <h2 className=" hidden md:flex">{t("appStore", { ns: "products" })}</h2>
                  </div>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <NextImage
                    alt="GooglePlay image"
                    className="object-cover xl:size-24 size-16   "
                    radius="none"
                    src={"Products/VMSearch/GooglePlay.png"}
                  />
                  <div className=" flex items-center gap-2 text-sm text-nowrap">
                    <SiGoogleplay />
                    <h2 className=" hidden md:flex">{t("googlePlay", { ns: "products" })}</h2>
                  </div>
                </div>
              </div>
              <div className=" flex flex-row gap-4 justify-end lg:hidden ">
                <div className=" flex flex-row items-center gap-2">
                  <Button
                    radius="full"
                    as={Link}
                    variant="shadow"
                    isExternal={true}
                    href="https://apps.apple.com/hk/app/vmsearch/id1639085416?l=en"
                  >
                    <SiApple /> <h2 className=" ">{t("appStore", { ns: "products" })}</h2>
                  </Button>
      
                  <Button
                    radius="full"
                    variant="shadow"
                    as={Link}
                    isExternal={true}
                    href="https://play.google.com/store/apps/details?id=com.visionmatrix.trm&pli=1"
                  >
                    <SiGoogleplay />
                    <h2 className=" ">{t("googlePlay", { ns: "products" })}</h2>
                  </Button>
                </div>
              </div>
            </div>
          ),
          image: "Products/VMSearch/VMsearch_cover.jpg",
          coverLogo: "Products/VMSearch/VMsearch-LOGO.png",
          gradient:
            "from-background to-primary-300 opacity-60 group-hover:opacity-90 ",
        },
        {
          name: t("product4", { ns: "products" }),
          subtitle: t("subtitle4", { ns: "products" }),
          description: t("description4", { ns: "products" }),
          platforms: [
            <DiApple />,
            <DiAndroid />,
            <TbDeviceMobile />,
          ],
          footer: (
            <div className=" flex flex-col items-end w-full trans-text-bt ">
              <Button
                className=""
                color="primary"
                variant="shadow"
                radius="full"
                onPress={onOpen}
              >
                {t("contactUs", { ns: "products" })}
              </Button>
            </div>
          ),
          image: "Products/VMSRCAM/VMCAM_cover.jpg",
          coverLogo: "Products/VMSRCAM/VMCAM_LOGO.png",
          gradient:
            "from-background to-primary-100 opacity-70 group-hover:opacity-90 ",
        },
      ];
      
    return (
        <div id='products' className=' min-h-screen w-full bg-gradient-to-t from-background to-default-50'>
            <div className=' mx-auto max-w-screen-2xl  px-4 flex flex-col w-full h-full '>
                <h2 className=' my-16 text-3xl font-bold text-start tracking-wider'>{t("products", {ns:"nav"})}</h2>
                <div className=' w-full grid grid-cols-2 lg:grid-cols-4 gap-12 pb-16'>
                    {ProductList.map((product, index) => (
                        <Card key={index} className={`  outline-none  hover:outline-foreground outline-offset-4  group aspect-video relative col-span-2 ${ index === ProductList.length - 1 && ProductList.length % 2 === 1   && ' md:col-start-2 col-start-1'}`} isHoverable >
                            <div className={`absolute bg-gradient-to-bl ${product.gradient}  z-20 top-0 left-0 w-[200%] aspect-square rotate-[100deg] -translate-y-1/2 -translate-x-[85%] group-hover:-translate-x-[40%] transition-all duration-300 ease-in-out `}></div>

                            <div className=' z-30 absolute w-full h-full top-0 left-0 bottom-0 p-2 md:p-4 lg:p-6 '>
                                <div className=' w-full h-full justify-between gap-2 items-start flex flex-col'>
                                    <div className=' flex flex-row gap-4 items-center w-full '>
                                        <div className='w-[25%]  aspect-square justify-center  items-center flex flex-col relative   '>
                                            <NextImage
                                                alt="product image"
                                                className="object-cover rounded-none "
                                                src={product.coverLogo}
                                            />
                                            {/* <div className=' font-semibold text-xs md:text-base lg:text-lg  absolute -bottom-8 duration-150 group-hover:opacity-0 transition-all ease-in-out'>
                                                {product.name}
                                            </div> */}
                                        </div>
                                        <div className=' text-start trans-text-rl '>
                                            <h2 className=' font-bold lg:text-4xl text-2xl'>{product.name}</h2>
                                            <h3>{product.subtitle}</h3>
                                            <div className=' mt-2 w-fit flex flex-row gap-2 p-2 rounded-full bg-background bg-opacity-50 backdrop-blur-sm'>
                                                {product.platforms}
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className=' flex-grow trans-text-lr  overflow-auto scrollbar-hide'>{product.description}</h2>
                                    {product.footer}
                                </div>
                            </div>

                            <NextImage
                                alt="product image"
                                className="object-cover   "
                                isBlurred
                                src={product.image}
                            />
                        </Card>
                    ))}
                </div>
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

export default Products
