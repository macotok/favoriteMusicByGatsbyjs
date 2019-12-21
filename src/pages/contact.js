import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import TextInput from '../components/Input/TextInput';
import TextAreaInput from '../components/Input/TextAreaInput';
import SelectInput from '../components/Input/SelectInput';
import { Button, TextField, Typography } from '@material-ui/core';

const Contact = props => {
  const { handleSubmit, pristine, submitting, invalid } = props
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
          <Field label="お問い合わせカテゴリ" name="category" type="select" component={SelectInput} />
        </div>
        <div>
          <Field label="お問い合わせ内容" name="text" type="text" component={TextAreaInput} />
        </div>
        <Button
          label="Cancel"
          variant="contained"
          color="primary"
        >
          キャンセル
        </Button>
        <Button
          label="Submit"
          type="submit"
          disabled={pristine || submitting || invalid}
          variant="contained"
          color="primary"
        >
          確認
        </Button>
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
