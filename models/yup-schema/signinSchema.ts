import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
    )
    .required("Password is required"),
});
