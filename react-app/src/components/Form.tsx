import { FormEvent, useState } from "react";

const Form = () => {
  // using state hook in this case makes it easier but re-rendering with every change might
  // cause performance issues so in complex pages use the ref hook.
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            //   using controlled values - so it will not get out of sync
            value={person.name}
            onChange={(event) => {
              setPerson({ ...person, name: event.target.value });
            }}
            id="name"
            type="text"
            className="form-control"
          />
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              //   using controlled values - so it will not get out of sync
              value={person.age}
              onChange={(event) => {
                setPerson({ ...person, age: parseInt(event.target.value) });
              }}
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
