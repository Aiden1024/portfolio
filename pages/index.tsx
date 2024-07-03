import { Link, Snippet, Code, button as buttonStyles } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

import Home from "@/components/Home";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Home />
      <Products/>
      <Partners/>
      <About/>
      <Timeline/>
      <Footer/>
    </DefaultLayout>
  );
}

export async function getStaticProps(context: { locale: any; }) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
