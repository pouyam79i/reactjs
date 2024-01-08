import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

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
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
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
