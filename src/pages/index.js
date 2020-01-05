import React from 'react';
import Layout from '../components/Layouts/Default';
import TitleH3 from '../components/Atoms/Title/TitleH3';
import Text from '../components/Atoms/Text/Text';
import { linkText, aboutText } from '../text/top';
import BlockList from '../components/Molecules/List/BlockList';
import { propShape, propString } from '../helpers/propTypes';

const Home = ({ location: { pathname } }) => (
  <Layout pathname={pathname}>
    <Text>
      ぷうこが勝手に音楽について語るサイトです。<br/>
      これまでどういう音楽を聴いてきたか。どういう音楽が好きかをつづってます。
    </Text>
    {
      linkText.map((list, index) => (
        <BlockList list={list} isLastChild={linkText.length === (index + 1)} key={index}/>
      ))
    }
    <TitleH3>
      このサイトについて
    </TitleH3>
    <ul>
      {aboutText.map((list, index) => (
        <li key={index} dangerouslySetInnerHTML={{__html: list}} />
      ))}
    </ul>
  </Layout>
);

Home.propTypes = {
  location: propShape({
    pathname: propString(),
  })
};

export default Home;

