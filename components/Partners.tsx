import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'

const partnerLogos = [
  { src: require('@/asset/Partners/Aws.png'), alt: 'AWS Logo' },
  { src: require('@/asset/Partners/Bonjour.png'), alt: 'Bonjour Logo' },
  { src: require('@/asset/Partners/Eagle.png'), alt: 'Eagle Logo' },
  { src: require('@/asset/Partners/LP.png'), alt: 'LP Logo' },
  { src: require('@/asset/Partners/NVIDIA.png'), alt: 'NVIDIA Logo' },
  { src: require('@/asset/Partners/CM.png'), alt: 'CM Logo' },
  { src: require('@/asset/Partners/cyberPort.png'), alt: 'CyberPort Logo' },
  { src: require('@/asset/Partners/iDance.png'), alt: 'iDance Logo' },
  { src: require('@/asset/Partners/MTR.png'), alt: 'MTR Logo' },
  { src: require('@/asset/Partners/HKSTP.png'), alt: 'HKSTP Logo' },
];

const Partners = () => {

  const { t } = useTranslation()

  return (
    <div id='partners' className="w-full items-center mx-auto max-w-screen-2xl px-4 flex flex-col justify-center py-8">
      <h2 className="text-center mt-4 mb-8 text-3xl tracking-wider font-bold">{t("partners", {ns:"nav"})}</h2>
      <div className=" max-w-screen-xl mx-auto w-full grid md:grid-cols-5 grid-cols-3 gap-1 md:gap-4 md:my-4 ">
        {partnerLogos.map((logo, index) => (
          <div key={index} className=" flex items-center mx-4 lg:mx-12 justify-center hover:-translate-y-2 duration-150">
            <Image src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
