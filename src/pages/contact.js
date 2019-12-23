import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import TextInput from '../components/Atoms/Input/TextInput';
import TextAreaInput from '../components/Atoms/Input/TextAreaInput';
import SelectInput from '../components/Atoms/Input/SelectInput';
import CancelButton from '../components/Atoms/Button/CancelButton';
import SubmitButton from '../components/Atoms/Button/SubmitButton';
import { CONTACT_SELECT } from '../constants';
import { required, minLength2, email} from '../validation';

const Form = styled.form`
  margin: 2rem 0 0;
`;

const TextStyle = styled.div`
  margin: 0 0 2rem;
  width: 40%;
`;

const TextAreaStyle = styled.div`
  margin: 0 0 2rem;
`;

const ButtonBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const Contact = props => {
  const { handleSubmit, pristine, submitting, invalid, location: { pathname } } = props;
  return (
    <Layout pathname={pathname}>
      <TitleH2>
        Contact
      </TitleH2>
      <Typography variant="body2" gutterBottom>
        取り上げて欲しいテーマやミュージシャン、または記事に関するお問い合わせはこちらになります。
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextStyle>
          <Field
            label="お名前"
            name="name"
            type="text"
            validate={[required, minLength2]}
            component={TextInput}
          />
        </TextStyle>
        <TextStyle>
          <Field
            label="メールアドレス"
            name="email"
            type="email"
            validate={[required, email]}
            component={TextInput}
          />
        </TextStyle>
        <TextStyle>
          <Field
            label="お問い合わせカテゴリ"
            labelId="contactCategory"
            name="category"
            type="select"
            validate={[required]}
            selectValue={CONTACT_SELECT}
            component={SelectInput}
          />
        </TextStyle>
        <TextAreaStyle>
          <Field
            label="お問い合わせ内容"
            name="text"
            type="text"
            validate={[required]}
            component={TextAreaInput}
          />
        </TextAreaStyle>
        <ButtonBlock>
          <CancelButton linkTo="/">
            キャンセル
          </CancelButton>
          <SubmitButton disabledProps={{ pristine, submitting, invalid }}>
            送信
          </SubmitButton>
        </ButtonBlock>
      </Form>
    </Layout>
  );
};

export default reduxForm({ form: 'contact' })(Contact);
