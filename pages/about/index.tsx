import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function DocsPage() {
  const { t } = useTranslation()

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <h1>{t("HELLO_WORLD")}</h1>
        </div>
      </section>
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