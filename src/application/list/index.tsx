/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from 'react';

interface IListProps {
  data: { name: string }[];
  deleteHandler?: any;
}
const List: React.FC<IListProps> = (props) => {
  const { data = [], deleteHandler } = props;
  return (
    <>
      {data.map((item: any, index: number) => (
        <div key={index} style={{ display: 'flex', width: 200, justifyContent: 'space-around' }}>
          <div>{item.name}</div>
          <div onClick={() => deleteHandler(index)}>Delete</div>
        </div>
      ))}
    </>
  );
};

export default React.memo(List);
