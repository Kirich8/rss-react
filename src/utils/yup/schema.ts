import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Z]/, {
      message: 'Name must begin with a capital letter',
      excludeEmptyString: true,
    })
    .required('Name is a required field'),

  age: yup
    .number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('Age must be a number')
    .required('Age is a required field'),

  email: yup
    .string()
    .matches(/[a-zA-Z0-9._-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/, {
      message: 'Enter the email of the format: example@mi.us',
      excludeEmptyString: true,
    })
    .email()
    .required('Email is a required field'),

  password: yup
    .string()
    .matches(/[A-Z]/, {
      message: 'Password must include one uppercase letter',
      excludeEmptyString: true,
    })
    .matches(/[a-z]/, {
      message: 'Password must include one lowercase letter',
      excludeEmptyString: true,
    })
    .matches(/[0-9]/, {
      message: 'Password must include one digit',
      excludeEmptyString: true,
    })
    .matches(/[^A-ZА-Яa-zа-я0-9Ёё\s]/, {
      message: 'Password must include one special character',
      excludeEmptyString: true,
    })
    .required('Password is a required field'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Passwords must match'),

  gender: yup.string().required('Choose a gender').oneOf(['man', 'woman']),

  conditions: yup
    .boolean()
    .oneOf([true], 'Confirm your agreement with the terms and conditions of the company')
    .required(''),

  image: yup
    .mixed<FileList>()
    .required('Upload a JPEG or PNG image with a maximum size of 500 kB')
    .test('fileRequired', 'Upload a JPEG or PNG image with a maximum size of 500 kB', (file) => !!file)
    .test(
      'fileSize',
      'Upload a JPEG or PNG image with a maximum size of 500 kB',
      (fileList) => !fileList[0] || fileList[0].size <= 500000
    )
    .test('fileType', 'Upload a JPEG or PNG image with a maximum size of 500 kB', (fileList) =>
      fileList.length ? ['image/jpeg', 'image/png'].includes(fileList[0].type) : false
    ),
});
