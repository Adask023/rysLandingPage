import * as Yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Pole musi zawierać co najmniej 2 znaki")
    .max(100, "*Pole nie może być dłuższe niż 100 znaków")
    .required("*Imię jest wymagane"),
  secondname: Yup.string()
    .min(2, "*Pole musi zawierać co najmniej 2 znaki")
    .max(100, "*Pole nie może być dłuższe niż 100 znaków")
    .required("*Nazwisko jest wymagane"),
  email: Yup.string()
    .email("*Podaj poprawny adres Email")
    .max(100, "*Pole nie może być dłuższe niż 100 znaków")
    .required("*Email jest wymagany"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Numer telefonu jest niepoprawny")
    .required("*Numer telefonu jest wymagany"),
  message: Yup.string()
    .min(2, "*Pole musi zawierać co najmniej 2 znaki")
    .max(500, "*Pole nie może być dłuższe niż 500 znaków"),
});
