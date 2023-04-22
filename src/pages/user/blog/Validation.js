import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string()
    .required("title is required")
    .min(3, "title must be at least 3 characters"),
  body: Yup.string()
    .required("body post is required")
    .min(3, "body must be at least 3 characters")
    .max(3000, ",aximum body length is 3000 characters"),
});
const validationSchema = { resolver: yupResolver(schema) };

export { validationSchema };
