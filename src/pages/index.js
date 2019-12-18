import React from 'react';
import Layout from '../components/Layouts/Default';
import Text from '../components/Atoms/Text/Text';
import topText from '../text/top';
import BlockList from '../components/Molecules/List/BlockList';

const Home = () => (
  <Layout>
    <main>
      <Text>
        ぷうこの勝手に音楽について語るサイトです。<br />
        これまでどういう音楽を聴いてきたか。どういう音楽が好きかをつづってます。
      </Text>
      {
        topText.map((list, index) => (
          <BlockList list={list} isLastChild={topText.length === (index + 1)} key={index} />
        ))
      }
    </main>
  </Layout>
);

export default Home;

