import { FieldValues, useForm } from "react-hook-form";

// define form data to make useForm understand form data shape
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // deconstructing useForm props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);
  const submitData = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            id="name"
            type="text"
            className="form-control"
          />
          {/* using optional chains '?' in 'errors.name?.type' makes it easier*/}
          {errors.name?.type === "required" && <p>Name field is required!</p>}
          {errors.name?.type === "minLength" && <p>Name min length is 3!</p>}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              {...register("age")}
              id="age"
              type="number"
              className="form-control"
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
