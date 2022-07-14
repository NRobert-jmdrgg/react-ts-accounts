import React from 'react';
import { useState, useEffect } from 'react';
import Tablerow from '../tablerow/tablerow.component';

// utils
import { getData } from '../../utils/data.utils';

import './table.styles.scss';

// types
export type Account = {
  _id: string;
  account_id: number;
  limit: number;
  products: string[];
};

const Table: React.FC = () => {
  // accountok z adatbázisban
  const [accounts, setAccouts] = useState<Account[]>([]);

  // egyszer fetch-eljük az összeset
  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await getData<Account[]>(
        'http://localhost:5001/accounts'
      );
      setAccouts(accounts);
    };
    // call
    fetchAccounts();
  }, []);

  return (
    <div className='database-table'>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>account_id</td>
            <td>limit</td>
            <td>products</td>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <Tablerow tableRowProps={account} key={account._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
