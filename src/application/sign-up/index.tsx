/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import List from 'application/list';
import React, { SyntheticEvent, useState } from 'react';

const SignUp: React.FC = () => {
  //   const [name, setName] = useState('');
  //   const [pwd, setPwd] = useState('');
  const [data, setData] = useState([] as { name: string }[]);
  const [inputs, setInputs] = useState({ name: '' } as { name: string });
  const submitHandler = (e: any): void => {
    e.preventDefault();
    setData([...data, inputs]);
  };
  const onChangeHandler = (e: any): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const deleteHandler = (val: number): void => {
    if (data.length) {
      setData(data.filter((_item, i) => i !== val));
    }
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          required
          value={inputs?.name}
          //   onChange={(e) => setName(e.target.value)}
          onChange={onChangeHandler}
        />
        <br />
        {/* <input
          type="text"
          name="pwd"
          id="pwd"
          placeholder="Enter Password"
          required
          value={inputs?.pwd}
          //   onChange={(e) => setPwd(e.target.value)}
          onChange={onChangeHandler}
        /> */}
        <br />
        <button type="submit">Submit</button>
      </form>
      <List data={data} deleteHandler={deleteHandler} />
    </div>
  );
};

export default SignUp;
