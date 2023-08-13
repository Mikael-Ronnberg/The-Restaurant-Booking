import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./BookingForm.scss";
import { useContext, useState } from "react";
import { BookingContext, IPersonForm } from "../../contexts/BookingContext";

interface IFormInputs {
  firstName: string;
  telefon: string;
  email: string;
}

const SignupSchema = yup
  .object({
    firstName: yup.string().required("Please enter your first name"),

    telefon: yup
      .number()
      .required("Please enter your telephone number")
      .typeError("Please enter a valid telephone number")
      .positive()
      .integer(),
    email: yup
      .string()
      .required("Please enter your email address")
      .email("Please enter a valid email address"),
  })
  .required();

export const BookingForm = () => {
  const [gdprChecked, setGdprChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const { getPersonInfo } = useContext(BookingContext);

  const onSubmit = (data: IFormInputs) => {
    // console.log(JSON.stringify(data));

    // firstName = data.firstName;

    // telefon = data.telefon;
    // email = data.email;

    getPersonInfo(data);
    setIsSubmitted(true);
    reset();
  };

  const handleGdprCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGdprChecked(e.target.checked);
  };

  return (
    <>
      <h2 className="title">BOOK A TABLE</h2>
      <hr />
      <p>We have a table available </p>
      <p>Complete the form below to finish your booking</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Telefon</label>
          <input
            type="number"
            {...register("telefon", { valueAsNumber: true })}
          />
          {errors.telefon && <p>{errors.telefon.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label className="gdpr-label">
            <input
              type="checkbox"
              checked={gdprChecked}
              onChange={handleGdprCheckboxChange}
            />
            <span className="gdpr-text">
              I agree to the GDPR terms and conditions.
              <a href="https://gdpr-info.eu/" target="_blank">
                Read More
              </a>
            </span>
          </label>
        </div>

        <input type="submit" />
      </form>
    </>
  );
};
