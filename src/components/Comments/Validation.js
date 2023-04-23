import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  email: Yup.string()
    .email("email address is invalid")
    .required("email address is required"),
  body: Yup.string()
    .required("The comment is required")
    .min(2, "name must be at least 2 characters")
    .max(300, ",aximum body length is 300 characters"),
});
const validationSchema = { resolver: yupResolver(schema) };

export { validationSchema };
