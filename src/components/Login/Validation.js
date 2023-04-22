import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("email address is invalid")
    .required("email address is required"),
});
const validationSchema = { resolver: yupResolver(schema) };

export { validationSchema };
