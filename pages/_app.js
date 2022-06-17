import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import '../styles/app.scss';  // import bulma 
// >>> 不用在每個.js import 'bulma/css/bulma.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:3001/api/videos`);
//   const data = await res.json();

//   return {
//     pageProps: { fetchData: data },
//   }
// };

MyApp.getInitialProps = async (appContext) => {
  // console.log(process.env.API_URL);
  const res = await fetch(`${process.env.API_URL}/api/videos`);
  // const res = await fetch(`http://localhost:3001/api/videos`);
  // const tagsRes = await fetch(`/api/tags-dict`);
  const data = await res.json();
  // const tagsData = await tagsRes.json();
  return {
    pageProps: { 
      fetchData: data,
      // tagsData: tagsData,
    },
  };
};

export default MyApp;
