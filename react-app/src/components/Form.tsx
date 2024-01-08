import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" type="text" className="form-control" />
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input id="age" type="number" className="form-control" />
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
