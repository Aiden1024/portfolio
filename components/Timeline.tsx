import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiTrophy, GiMicrophone } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { useTranslation } from 'next-i18next'

const Timeline = () => {
    const VTelementContentStyle = { background: 'transparent', padding: "0px", boxShadow: "none" }
    const VTelementContentArrowStyle = { borderRight: '7px solid #27272a ' }

    const { t } = useTranslation()

    const timelineData = [
        {
            year: 2018,
            title: "CES",
            subtitle: "Hong Kong, China",
            image: "Timeline/CES.png",
            icon: <FaPeopleGroup className=" " />,
            iconStyle: { background: '#006FEE', color: '#fff' }
        },
        {
            year: "2019/2020/2023",
            title: "HONG KONG BOOK FAIR",
            subtitle: "Hong Kong, China",
            image: "Timeline/HKBook.png",
            icon: <FaPeopleGroup className=" " />,
            iconStyle: { background: '#006FEE', color: '#fff' }
        },
        {
            year: 2021,
            title: "HK DELOITTE RISING STAR",
            subtitle: "Hong Kong, China",
            description: "To The Ocean, To The Stars",
            image: "Timeline/HKDR.png",
            icon: <GiTrophy className=" " />,
            iconStyle: { background: '#ffbf00', color: '#fff' }
        },
        {
            year: 2021,
            title: "HONG KONG INFLUENCER",
            subtitle: "Hong Kong, China",
            image: "Timeline/HKInfluencer.png",
            icon: <GiTrophy className=" " />,
            iconStyle: { background: '#ffbf00', color: '#fff' }
        },
        {
            year: 2021,
            title: "FORBES CHINA",
            subtitle: "Hong Kong, China",
            image: "Timeline/Forbes.png",
            icon: <GiTrophy className=" " />,
            iconStyle: { background: '#ffbf00', color: '#fff' }
        },
        {
            year: 2023,
            title: "SHENZHEN MEDIA GROUP",
            subtitle: "Shenzhen, China",
            image: "Timeline/SZMG.png",
            icon: <GiMicrophone className=" " />,
            iconStyle: { background: '#f31260', color: '#fff' }
        },
        {
            year: 2023,
            title: "CMG RADIO THE GREATER BAY",
            subtitle: "Shenzhen, China",
            // description: "Creative Direction, User Experience, Visual Design",
            image: "Timeline/CMR.png",
            icon: <GiMicrophone className=" " />,
            iconStyle: { background: '#f31260', color: '#fff' }
        },
        {
            year: 2023,
            title: "SHENZHEN PRESS GROUP",
            subtitle: "Shenzhen, China",
            image: "Timeline/SZPG.png",
            icon: <GiMicrophone className=" " />,
            iconStyle: { background: '#f31260', color: '#fff' }
        },
        {
            year: 2023,
            title: "COTIEC (Second Class Award)",
            subtitle: "Shenzhen, China",
            image: "Timeline/COTIEC.png",
            icon: <GiTrophy className=" " />,
            iconStyle: { background: '#ffbf00', color: '#fff' }
        },
    ];

    return (
        <div id='timeline' className="w-full h-screen min-h-[500px] flex flex-col mx-auto gap-4 py-16 bg-[url('/other/WorldMap.png')] bg-contain bg-center">
            <div className=' flex flex-col items-center text-center justify-center'>
                <h2 className=' text-4xl font-bold tracking-wider mb-4'>{t("timeline", {ns:"nav"})}</h2>
            </div>

            <div className=" w-full h-full  flex justify-center ">
                <div className=" max-w-screen-lg overflow-y-auto  scrollbar-hide  ">
                    <VerticalTimeline>
                        {timelineData.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={VTelementContentStyle}
                                contentArrowStyle={VTelementContentArrowStyle}
                                date={item.year.toString()}
                                iconStyle={item.iconStyle}
                                icon={item.icon}
                            >
                                <Card className=' '>
                                    <CardHeader className='pb-0 pt-2'>
                                        <div className=' flex flex-col'>
                                            <div className=' text-large font-bold'>{item.title}</div>
                                            <div className=' text-default-500'>{item.subtitle}</div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        {item.image && (
                                            <Image
                                                isZoomed
                                                alt="Card background"
                                                className=" "
                                                src={item.image}
                                            />
                                        )}
                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}
                                    </CardBody>
                                </Card>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Timeline
