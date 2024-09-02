import React, { createContext, useState, useEffect } from 'react';
import { Endpoints } from './Endpoints';
import { getData } from './GetData';

export const DataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getData(Endpoints.userEndpoint, setUser);
  }, []);

  return (
    <DataContext.Provider value={{ user }}>
      {children}
    </DataContext.Provider>
  );
};