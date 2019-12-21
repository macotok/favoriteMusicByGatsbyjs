import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Typography } from '@material-ui/core';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import TextInput from '../components/Atoms/Input/TextInput';
import TextAreaInput from '../components/Atoms/Input/TextAreaInput';
import SelectInput from '../components/Atoms/Input/SelectInput';
import CancelButton from '../components/Atoms/Button/CancelButton';
import SubmitButton from '../components/Atoms/Button/SubmitButton';

const Contact = props => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  const disabledProps = { pristine, submitting, invalid };
  return (
    <Layout>
      <TitleH2>
        Contact
      </TitleH2>
      <Typography variant="body2" gutterBottom>
        取り上げて欲しいテーマやミュージシャン、または記事に関するお問い合わせはこちらになります。
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <Field label="お名前" name="name" type="text" component={TextInput} />
        </div>
        <div>
          <Field label="メールアドレス" name="email" type="email" component={TextInput} />
        </div>
        <div>
          <Field label="お問い合わせカテゴリ" labelId="contactCategory" name="category" type="select" component={SelectInput} />
        </div>
        <div>
          <Field label="お問い合わせ内容" name="text" type="text" component={TextAreaInput} />
        </div>
        <CancelButton>
          キャンセル
        </CancelButton>
        <SubmitButton disabledProps={disabledProps}>
          確認
        </SubmitButton>
      </form>
    </Layout>
  );
};

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = 'Titleを入力してください';
  return errors;
}

export default reduxForm({ validate, form: 'contact' })(Contact);
