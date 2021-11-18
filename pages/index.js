import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Timi. I am a software developer from Nigeria. You can view
          my profile on <a href="https://github.com/harrytimbog">Github</a> and on{" "}
          <a href="https://www.linkedin.com/in/timilehin-arigbede-227449144/">
            LinkedIn
          </a>{" "}
        </p>
        <div>
          <a href="https://wa.me/2348132930847">
            You can also contact me on Whatsapp
          </a>
        </div>
      </section>
    </Layout>
  );
}
