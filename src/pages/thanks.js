import React from 'react'
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import Text from '../components/Atoms/Text/Text';
import { propShape, propString } from '../helpers/propTypes';

const Thanks = ({ location: { pathname } }) => (
  <Layout pathname={pathname}>
    <TitleH2>
      Tanks
    </TitleH2>
    <Text>
      お問い合わせいただきありがとうございます！
    </Text>
  </Layout>
);

Thanks.propTypes = {
  location: propShape({
    pathname: propString(),
  })
};

export default Thanks;
