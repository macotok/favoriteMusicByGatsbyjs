import React from 'react';
import Typography from '@material-ui/core/Typography';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import Layout from '../components/Layouts/Default';

export default ({ pageContext }) => (
  <Layout>
    <TitleH2 dangerouslySetInnerHTML={{ __html: pageContext.title}} />
    <Typography dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

