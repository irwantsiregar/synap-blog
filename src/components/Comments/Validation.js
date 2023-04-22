const rules = {
  name: {
    required: "name is required",
    max: 100,
    min: 3,
    maxLength: 100,
  },
  email: {
    required: "email address is required",
    max: 100,
    min: 3,
    pattern: /^\S+@\S+$/i,
  },
  body: {
    required: "body comment is required",
    max: 350,
    min: 3,
    maxLength: 100,
  },
};

export { rules };
