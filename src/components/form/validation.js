import * as Yup from 'yup';


export const yupEventObj = Yup.object({
    title: Yup.string()
        .max(20, '* Must be 15 characters or less')
        .min(3, '* Must be more than 3 characters')
        .required('* Required'),
    owner: Yup.string()
        .max(10, '* Must be 10 characters or less')
        .min(3, '* Must be more than 3 characters')
        .required('* Required'),
    date: Yup.string()
        .matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, '* date format should be YYYY-MM-DD')
        .required('* Required'),
    start: Yup.string()
        .max(5, '* Must be 5 characters or less')
        .required('* Required'),
    end: Yup.string()
        .max(5, '* Must be 5 characters or less')
        .required('* Required'),
    location: Yup.string()
        .max(13, '* Must be 13 characters or less')
        .min(3, '* Must be more than 3 characters')
        .required('* Required'),
    description: Yup.string()
        .min(50, '* must be more than 50 characters')
        .required('* Required'),
    photoUrl: Yup.string()
        .required('* Required'),
    })
