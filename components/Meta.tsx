import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export default function Meta({ title, description }: Props) {
  return (
    <Head>
      <meta name="viewport" />
      <meta content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Faggio",
  description: "Mit Faggio wissen Sie, wer wann im Büro ist.",
};
