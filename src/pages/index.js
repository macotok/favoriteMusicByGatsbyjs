import React from 'react';
import Layout from '../components/Layout/Layout';
import Text from '../components/Atoms/Text';
import topText from '../text/top';
import BlockList from '../components/Molecules/List/BlockList';

const Home = () => (
  <Layout>
    <main>
      <Text>
        ぷこおの勝手な音楽評論のサイトです。<br />
        これまでどういう音楽を聴いてきたか。どういう音楽が好きかを綴るサイトです。
      </Text>
      {
        topText.map((list, index) => (
          <BlockList list={list} key={index} />
        ))
      }
      <Text>
        このサイトはHeadlessCMS(WordPress)とGatsby.js(React)で制作しています。
      </Text>
    </main>
  </Layout>
);

export default Home;

