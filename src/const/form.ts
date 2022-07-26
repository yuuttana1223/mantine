export const MIN_AGE = 15;

export const EMAIL = {
  LABEL: "Email*",
  PLACEHOLDER: "example@example.com",
  AUTO_COMPLETE: "email",
  NAME: "email",
} as const;

export const PASSWORD = {
  LABEL: "Password*",
  PLACEHOLDER: "Password$password",
  DESCRIPTION:
    "Password should be at least 8 characters long and contain at least one lowercase letter, one uppercase letter and one special character",
  AUTO_COMPLETE: "current-password",
  NAME: "password",
  MIN_LENGTH: 8,
} as const;
