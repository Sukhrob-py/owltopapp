import Layout from "../components/Layout";

import '../styles/owl.scss'
import '../styles/main.scss'
import '../styles/nav.scss'
import '../styles/main-content.scss'
import '../styles/footer.scss'
import '../styles/courselayout.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
