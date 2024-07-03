import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { appWithTranslation, useTranslation } from 'next-i18next'
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import localFont from 'next/font/local'

const enFont = localFont({ src: '../fonts/Raleway-VariableFont_wght.ttf' })
const cnFont = localFont({ src: '../fonts/NotoSansSC-VariableFont_wght.ttf' })
const hkFont = localFont({ src: '../fonts/NotoSansHK-VariableFont_wght.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();
  const router = useRouter();


  const getFontClassName = () => {
    switch (i18n.language) {
      case 'en':
        return enFont.className;
      case 'cn':
        return cnFont.className;
      case 'hk':
        return hkFont.className;
      default:
        return enFont.className;
    }
  };

  return (
    <NextUIProvider navigate={router.push} className={getFontClassName()}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};

export default appWithTranslation(App)
