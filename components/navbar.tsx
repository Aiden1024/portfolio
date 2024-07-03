import {
  Button,
  Kbd,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

import { Image as NextUIImage } from "@nextui-org/react";
import Image from "next/image";
import { GrLanguage } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa6";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";

import Router from "next/router";
import { useRouter } from 'next/router'

export const Navbar = () => {
  const { t } = useTranslation()
  const router = useRouter();

  const navItems = [
    {
      label: t("home", { ns: "nav" }),
      href: "/",
      key:"home",
    },
    {
      label: t("products", { ns: "nav" }),
      href: "/",
      key:"products",
    },
    {
      label: t("partners", { ns: "nav" }),
      href: "/",
      key:"partners",
    },
    {
      label: t("about", { ns: "nav" }),
      href: "/",
      key:"about",
    },
    {
      label: t("timeline", { ns: "nav" }),
      href: "/",
      key:"timeline",
    },
    {
      label: t("contact", { ns: "nav" }),
      href: "/",
      key:"contact",
    },
  ];

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeLocale = (locale:any) => {
    router.push({
        pathname: router.pathname,
        query: router.query
    }, router.asPath, { locale });
}

const DropDownComponent = () => {
  return (
    <Dropdown className=" border border-default-400">
    <DropdownTrigger>
      <div className="px-px transition-opacity hover:opacity-80 cursor-pointer text-default-500"><FaGlobe className=" text-lg"/></div>
    </DropdownTrigger>
    <DropdownMenu aria-label="Link Actions" className=" " color="primary" onAction={(locale) =>{
      changeLocale(locale);
    }} >
      <DropdownItem key="en" >
        ENGLISH
      </DropdownItem>
      <DropdownItem key="cn"  >
        简体中文
      </DropdownItem>
      <DropdownItem key="hk" >
        繁体中文
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

  return (
    <NextUINavbar maxWidth="full" position="sticky" isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <ScrollLink className=" cursor-pointer hover:scale-105 duration-200 flex justify-start items-center gap-1" 
          to={"home"}
          duration={800}
          smooth="easeInOutCubic"
          offset={-50}
          >
            <div className=" size-16 mr-4 h-full items-center justify-center flex">
              <Image
                src={require("@/asset/VM/VMLogo.svg")}
                alt="logoImage"
              />
            </div>
            {/* <div className=" flex flex-col">
              <p className="font-bold text-inherit">VM</p>
            </div> */}
          </ScrollLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              
                <ScrollLink
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer',
                  )}
                  color="foreground"
                  to={item.key}
                  duration={800}
                  smooth="easeInOutCubic"
                  offset={-50}
                  
                >
                  {item.label}
                </ScrollLink>
               
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 items-center">
          {/* <ThemeSwitch /> */}
          <DropDownComponent/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <DropDownComponent/>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} >
            
                <ScrollLink
                  onClick={() => setIsMenuOpen(false)}
                  duration={800}
                  offset={-50}
                  smooth="easeInOutCubic"
                  color={
                    index === 2
                      ? "primary"
                      : index === navItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  to={item.key}
                >
                  {item.label}
                </ScrollLink>
             
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
