import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import { TextField, Typography } from '@material-ui/core';

const RenderField = (field) => {
  const { input, label, type, meta: { touched, error } } = field;
  return (
    <TextField
      label={label}
      type={type}
      errorText={touched && error}
      {...input}
      fullWidth={true}
    />
  )
};

const Contact = props => {
  const { handleSubmit } = props
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
          <Field label="お名前" name="name" type="text" component={RenderField} />
        </div>
        <div>
          <Field label="メールアドレス" name="email" type="email" component={RenderField} />
        </div>
        <button type="submit">Submit</button>
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
