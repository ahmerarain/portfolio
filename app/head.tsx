'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Muhammad Ahmer ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! I'm Muhammad Ahmer from Pakistan. I am a Full Stack Developer with over 2 years of experience in JavaScript and TypeScript, I have a strong passion for web development and creating visually appealing user interfaces. I've been dedicated to continuous learning and exploring new technologies.`,
    keywords:
      'Muhammad Ahmer, ahmerarain, Muhammad Ahmer portfolio, ahmerarain portfolio, ahmerarain portfolio, Muhammad Ahmer portfolio, ahmerarain github, Muhammad Ahmer github, ahmerarain LinkedIn, Muhammad Ahmer LinkedIn, Web, Programming web,  Application web, frontend,backend HTML, CSS, Javascript, Typescript, React, Express, MERN, ',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://ahmerarain.vercel.app${pathname}`}
      />
      <link rel="canonical" href={`https://ahmerarain.vercel.app${pathname}`} />
      <link rel="me" href="mailto:ahmerarain18@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Muhammad Ahmer" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ahmerarain_" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
