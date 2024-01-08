import { FormEvent, useRef } from "react";

const Form = () => {
  // always use 'null' to initial ref hook
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  //   you can use objects to gather form data and send this object to a server
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              ref={ageRef}
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
