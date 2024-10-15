import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomePageMain() {
  return (
    <main className='p-8 m-auto min-h-[calc(100dvh_-_60px)]'>
      <div className='container'>
        <div className='group/banner'>
          <div className='relative w-fit py-4'>
            <img
              className='rounded-full w-[120px]'
              width='120'
              src={require("@site/static/img/self.webp").default}
              alt='john valle'
            />
            <span className='absolute top-4 right-0 bg-white rounded-full padding-sm text-2xl w-8 h-8 text-center shadow-lg'>
              🇵🇭
            </span>
          </div>
          <Heading as='h1' className='hero__title text-black dark:text-white'>
            John D. Valle
          </Heading>
          <p>
            Frontend Engineer
            <br /> Based from Davao City, Philippines 🇵🇭
          </p>
          <div className='flex gap-2 py-2'>
            <img src={require("@site/static/img/ts.png").default} width='24' />
            <img src={require("@site/static/img/js.png").default} width='24' />
            <img
              src={require("@site/static/img/react.webp").default}
              width='24'
            />
          </div>
          <hr />
          <Heading as='h2' className='text-black dark:text-white'>
            Kumusta!
          </Heading>
        </div>
        <p>
          Sipping my 3rd cup of coffee while coding
          <br />
          because coding with an empty cup of coffee is a crime. ☕️
        </p>

        <a
          role='button'
          href='mailto:vallejohn.personal@gmail.com'
          className='button button--primary'
        >
          Work with me
        </a>
      </div>
    </main>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description='John Valle | Frontend Developer'
      wrapperClassName='relative'
    >
      <HomePageMain />
      <img
        className='absolute bottom-0 right-0 block dark:hidden'
        src={require("@site/static/img/logo-light.png").default}
        alt='logo'
        width='200'
      />
      <img
        className='absolute bottom-0 right-0 hidden dark:block'
        src={require("@site/static/img/logo-dark.png").default}
        alt='logo'
        width='200'
      />
    </Layout>
  );
}
