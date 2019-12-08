import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';
import topText from '../text/top';

const Home = () => (
  <Layout>
    <main>
      <p>
        ぷこおの勝手な音楽評論のサイトです。<br />
        これまでどういう音楽を聴いてきたか。どういう音楽が好きかを綴るサイトです。
      </p>
      {
        topText.map(list => (
          <div>
            <h2>{list.title}</h2>
            <p>{list.content}</p>
            <Link to={list.link}>to Page</Link>
          </div>
        ))
      }
      <p>
        このサイトはHeadlessCMS(WordPress)とGatsby.js(React)で制作しています。
      </p>
    </main>
  </Layout>
);

export default Home;

