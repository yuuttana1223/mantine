import { z } from "zod";
import { MIN_AGE, PASSWORD } from "~/constant";

const emailValidator = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Invalid email");

const passwordValidator = z
  .string()
  .trim()
  .min(
    PASSWORD.MIN_LENGTH,
    `Password should be at least ${PASSWORD.MIN_LENGTH} characters`
  )
  .regex(/[a-z]/, "Password should contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password should contain at least one uppercase letter")
  .regex(
    /[@$!%*#?&]/,
    "Password should contain at least one special character"
  );

export const signUpSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
  age: z.number().min(MIN_AGE, `Age should be at least ${MIN_AGE} years old`),
});

export const signInSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
});
