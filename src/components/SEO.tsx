type Props = {
  pathName: string;
  description: string;
  pageTitle: string;
};

const SEO = ({ pathName, description, pageTitle }: Props) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={`https://vunkyh.my.id/${pathName}`} />
      <meta name="description" content={description} />
      <meta name="keywords" content="personal, website, portfolio" />

      <link rel="icon" type="image/png" href="/favicon.png" />
      <title>{pageTitle}</title>
    </>
  );
};

export default SEO;
