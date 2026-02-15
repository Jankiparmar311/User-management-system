import * as Yup from "yup";

export const userFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  //   {
  //     name: "dob",
  //     label: "Date of Birth",
  //     type: "date",
  //     required: true,
  //   },
  //   {
  //     name: "address",
  //     label: "Address",
  //     type: "text",
  //     required: false,
  //   },
];

export const validationSchema = Yup.object(
  userFields.reduce((acc, field) => {
    if (field.required) {
      acc[field.name] = Yup.string()
        .trim()
        .required(`${field.label} required.`);
    } else {
      acc[field.name] = Yup.string();
    }
    return acc;
  }, {}),
);

export const initialValues = userFields.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});
