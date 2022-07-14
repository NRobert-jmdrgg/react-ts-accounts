import React, { Fragment } from 'react';

type tableRowProps = {
  _id: string;
  account_id: number;
  limit: number;
  products: string[];
};

const Tablerow = (props: { tableRowProps: tableRowProps }) => {
  const { _id, account_id, limit, products } = props.tableRowProps;
  return (
    <tr>
      <td>{_id}</td>
      <td>{account_id}</td>
      <td>{limit}</td>
      <td>{products}</td>
    </tr>
  );
};

export default Tablerow;
