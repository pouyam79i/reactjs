import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string({ invalid_type_error: "Description is required." })
    .min(2, { message: "At least 2 char for description is required." })
    .max(10, { message: "At most 10 char for description is required." }),
  amount: z
    .number({ invalid_type_error: "Please specify amount." })
    .min(1, "Amount is at least $1"),
  // in real world app cat is cat.id + cat.name -> here I have simplified to just string name :)
  categories: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

interface ItemData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  setOnSubmit?: (item: ItemData) => void;
}

const Form = ({ setOnSubmit = (item: ItemData) => {} }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const item = {
      description: data.description,
      amount: data.amount,
      category: data.categories,
    };
    setOnSubmit(item);
    reset();
  };

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
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
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
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Category
          </label>
          <select
            {...register("categories")}
            id="categories"
            className="form-select"
            defaultValue="0"
          >
            <option value="0">Select Category</option>
            {categories.map((cat) => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
          {errors.categories && (
            <p className="text-danger">{errors.categories.message}</p>
          )}
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
