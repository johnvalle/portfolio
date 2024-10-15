import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  return (
    <header className='p-8 mx-auto'>
      <div className='container'>
        <div className='group/banner'>
          <div className='relative w-fit py-4'>
            <img
              className='rounded-full w-[150px]'
              width='190'
              src={require("@site/static/img/self.webp").default}
              alt='john valle'
            />
            <span className='absolute top-4 right-0 bg-white rounded-full padding-sm text-2xl w-8 h-8 text-center shadow-lg'>
              🇵🇭
            </span>
          </div>
          <Heading
            as='h1'
            className='hero__title text-light-primary dark:text-dark-primary'
          >
            Kumusta! I'm John Valle!
          </Heading>
        </div>
        <p>
          Coding in an empty cup of coffee is a crime ☕️ <br /> So I'm now in
          my 3rd cup of coffee while coding in Davao City, Philippines 🇵🇭
        </p>
        <button className='button button--primary'>Get to know me</button>
      </div>
    </header>
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
      <HomepageHeader />
    </Layout>
  );
}
