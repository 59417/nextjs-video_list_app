import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import '../styles/app.scss';  // import bulma 
// >>> 不用在每個.js import 'bulma/css/bulma.css';
// import { TAGS_DICT, FAVORITE_IDS, CATEGORY_IDS } from '../components/data';
import { ALL_LIST } from '../components/data_all';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};


MyApp.getInitialProps = async (appContext) => {
  // console.log(process.env.API_URL);
  try {
    // const res = await fetch(`${process.env.API_URL}/api/videos`);
    // const data = await res.json();
    return {
      pageProps: { 
        fetchData: ALL_LIST,
        // importData: {
        //   tagsData: TAGS_DICT,
        //   favsData: FAVORITE_IDS,
        //   catsData: CATEGORY_IDS
        // }
    }};
  } catch (error) {
    return {
      pageProps: { 
        fetchData: ALL_LIST,
        // importData: {
        //   tagsData: TAGS_DICT,
        //   favsData: FAVORITE_IDS,
        //   catsData: CATEGORY_IDS
        // }
    }};
  };
};

export default MyApp;
