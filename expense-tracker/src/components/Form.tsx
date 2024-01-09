import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string({ invalid_type_error: "Description is required." })
    .min(2, { message: "At least 2 char for description is required." })
    .max(10, { message: "At most 10 char for description is required." }),
  amount: z
    .number({ invalid_type_error: "Please specify amount." })
    .min(1, "At least 1 copy required."),
  categories: z
    .number({ invalid_type_error: "Please specify category." })
    .min(1, { message: "Please specify category." })
    .max(5, { message: "Please specify category." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Category
          </label>
          <select
            {...register("categories", { valueAsNumber: true })}
            id="categories"
            className="form-select"
            defaultValue="0"
          >
            <option value="0">Select Category</option>
            <option value="1">Groceries</option>
            <option value="2">Utilities</option>
            <option value="3">Entertainment</option>
          </select>
          {errors.categories && <p>{errors.categories.message}</p>}
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
