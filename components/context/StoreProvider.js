import { createContext, useState } from "react";

const StoreProvider = ({ children }) => {
  const Store = createContext();

  const [name, setName] = useState("Fysalidev");
  const [count, setCount] = useState(0);

  return (
    <Store.Provider value={{ name, setName, count, setCount }}>
      {children}
    </Store.Provider>
  );
};

export default StoreProvider;
