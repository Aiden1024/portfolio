import { Divider } from '@nextui-org/react';
import React from 'react'
import { TbHome, TbBuilding, TbPhone, TbMapPin, TbHeartHandshake, TbMail, TbBulb, TbUserHeart } from "react-icons/tb";
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const locations = [
    {
      city: t('city1', {ns: 'footer'}), // '香港HK'
      phone: '+852 2638 0200',
      fax: '+852 2638 3966',
      address: t('hkAddress', {ns: 'footer'}) // '香港新界白石角科學園1W核心大樓二座531A室'
    },
    {
      city: t('city2', {ns: 'footer'}), // '深圳SZ'
      phone: '131 6376 3995',
      address: t('szAddress', {ns: 'footer'}), // '深圳市龍華區民治街道北站社區匯德大廈一號樓1266'
      fax: 'NA'
    }
  ];
  
  const contacts = [
    {
      title: t('contact1', {ns: 'footer'}), // '業務合作'
      email: 'sale@vision-matrix.com',
      icon:TbHeartHandshake
    },
    {
      title: t('contact2', {ns: 'footer'}), // '投資事宜'
      email: 'invest@vision-matrix.com',
      icon: TbBulb
    },
    {
      title: t('contact3', {ns: 'footer'}), // '招賢納士'
      email: 'hr@vision-matrix.com',
      icon: TbUserHeart
    }
  ];


  return (
    <footer id='contact' className=' py-16 max-w-screen-2xl px-4 w-full mx-auto'>
      <div className=' w-full  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 '>
        <div className=' flex flex-col gap-8  '>
          {locations.map((location, index) => (
            <div className=' flex flex-col' key={index}>
              <h2 className='  text-lg '>{location.city}</h2>
              <p className=' flex items-center gap-2'><span><TbPhone /></span>Tel: {location.phone} Fax: {location.fax}</p>
              <p className=' flex items-center gap-2'><TbMapPin />{location.address}</p>
            </div>
          ))}
        </div>

        <div className=' flex flex-col gap-2  '>
          <div className=' w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
            {contacts.map((contact, index) => (
              <div className=' flex flex-col' key={index}>
                <h2 className=' flex items-center gap-2  text-lg '><span><contact.icon /></span>{contact.title}</h2>
                <p className=' flex items-center gap-2'>{contact.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Divider className=' mb-4 mt-8 '></Divider>
      <h2 className=' text-xs'>{t('copyright', {ns: 'footer'})}</h2>
    </footer>
  )
}

export default Footer
