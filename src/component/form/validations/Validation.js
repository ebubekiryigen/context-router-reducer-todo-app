import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: 'Bu alan boş olamaz'
    },
    string: {
        min: 'Bu alan minimum ${min} karakter olmalıdır.',
    }
})

export default Yup