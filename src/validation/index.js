export const required = value => (value || typeof value === 'number' ? undefined : '必須項目です')

const minLength = min => value =>
  value && value.length < min ? `${min}文字以上で入力してください` : undefined
export const minLength2 = minLength(2);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? '無効なメールアドレスです'
    : undefined;
