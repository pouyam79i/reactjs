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
    .min(1, "Amount is at least $1"),
  // in real world app cat is cat.id + cat.name -> here I have simplified to just string name :)
  categories: z.string({ invalid_type_error: "Please specify category." }),
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
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const item = {
      description: data.description,
      amount: data.amount,
      category: data.categories,
    };
    setOnSubmit(item);
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
            {...register("categories")}
            id="categories"
            className="form-select"
            defaultValue="0"
          >
            <option value="0">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.categories && <p>{errors.categories.message}</p>}
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
