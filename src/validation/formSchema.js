//import yup
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name Required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Please choose a size"),
  sauce: yup.string().oneOf(["red", "oil", "white"], "Please choose a sauce"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onions: yup.boolean(),
  greenpeppers: yup.boolean(),
  bacon: yup.boolean(),
  linguica: yup.boolean(),
  garlic: yup.boolean(),
  mushrooms: yup.boolean(),
  special: yup.string(),
});
