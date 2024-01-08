import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// define schemas with 'zod' for validation rules
const schema = z.object({
  name: z.string().min(3).max(3),
  age: z
    .number({ invalid_type_error: "Age field is required!" })
    .min(18, { message: "The person must be at least 18 years old!" })
    .max(50, { message: "The person must be at most 50 years old!" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  // deconstructing useForm props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              {...register("age", { valueAsNumber: true })}
              id="age"
              type="number"
              className="form-control"
            />
            {errors.age && <p>{errors.age.message}</p>}
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
