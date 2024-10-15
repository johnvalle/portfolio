import Layout from "@theme/Layout";

export default function Skills() {
  return (
    <Layout title='Skills'>
      <section className=''>
        <h1>Skills</h1>

        <h3>Languages I code with</h3>
        <div className='grid grid-cols-12'>
          <img src={require("@site/static/img/ts.png").default} width='36' />
          <img src={require("@site/static/img/js.png").default} width='36' />

          <img
            src={require("@site/static/img/react.webp").default}
            width='36'
          />
          <img src={require("@site/static/img/rhf.png").default} width='36' />
          <img src={require("@site/static/img/rn.png").default} width='36' />

          <img src={require("@site/static/img/vue.png").default} width='36' />
        </div>

        <h3>Tools I work with</h3>
        <div className='grid grid-cols-12'>
          <img
            src={require("@site/static/img/cypress.webp").default}
            width='36'
          />
          <img src={require("@site/static/img/expo.png").default} width='36' />
          <img
            src={require("@site/static/img/puppeteer.png").default}
            width='36'
          />
          <img src={require("@site/static/img/pw.png").default} width='36' />
          <img
            src={require("@site/static/img/rquery.png").default}
            width='36'
          />
          <img src={require("@site/static/img/sass.png").default} width='36' />
          <img src={require("@site/static/img/tw.png").default} width='36' />
          <img src={require("@site/static/img/vite.png").default} width='36' />
          <img
            src={require("@site/static/img/vitest.webp").default}
            width='36'
          />

          <img
            src={require("@site/static/img/webpack.png").default}
            width='36'
          />
          <img
            src={require("@site/static/img/zustand.jpeg").default}
            width='36'
          />
        </div>
      </section>
    </Layout>
  );
}
