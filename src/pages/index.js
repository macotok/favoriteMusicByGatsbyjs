import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';
import Text from '../components/Atoms/Text';
import topText from '../text/top';

const Home = () => (
  <Layout>
    <main>
      <Text>
        ぷこおの勝手な音楽評論のサイトです。<br />
        これまでどういう音楽を聴いてきたか。どういう音楽が好きかを綴るサイトです。
      </Text>
      {
        topText.map(list => (
          <div>
            <h2>{list.title}</h2>
            <p>{list.content}</p>
            <Link to={list.link}>to Page</Link>
          </div>
        ))
      }
      <Text>
        このサイトはHeadlessCMS(WordPress)とGatsby.js(React)で制作しています。
      </Text>
    </main>
  </Layout>
);

export default Home;

