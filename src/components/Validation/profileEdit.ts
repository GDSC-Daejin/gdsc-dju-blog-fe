import { useFormik } from 'formik';
import * as Yup from 'yup';

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, '필수입력란입니다.')
    .matches(
      /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
      'gmail.com형식으로 작성해주세요',
    )
    .required('필수입력란입니다.'),
});
const nicknameSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(3, '3글자이상 작성해주세요')
    .max(15, '2~15사이의 길이로 입력해주세요')
    .matches(/^[A-Z]/, '대문자로 시작해야합니다.')
    // .notOneOf(nicknameList ? nicknameList : [], '중복된 닉네임입니다.')
    .required('필수입력란입니다.'),
});

export const profileEditValidation = useFormik({
  initialValues: {
    name: '',
    nickname: '',
    introduce: '',
    hashTag: '',
    phoneNumber: '',
    email: '',
    major: '',
    studentID: '',
    position: '',
    gitEmail: '',
    memberPortfolioUrls: [],
  },
  onSubmit: () => {
    return;
  },
  //validation setting
  validationSchema: Yup.object({
    emailSchema,

    major: Yup.string()
      .min(3, '3글자 이상 작성해주세요')
      .required('필수입력란입니다.'),
    introduce: Yup.string()
      .min(10, '10글자 이상 작성해주세요')
      .required('필수입력란입니다. 각 단어는 ,로 구분합니다.'),
  }),
});
