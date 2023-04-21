import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("name is required")
    .min(3, "name must be at least 3 characters"),
  email: Yup.string()
    .email("email address is invalid")
    .required("email address is required"),
  gender: Yup.mixed().oneOf(["male", "female"]).defined(),
  status: Yup.mixed().oneOf(["active", "inactive"]).defined(),
});
const validationSchema = { resolver: yupResolver(schema) };

export { validationSchema };
