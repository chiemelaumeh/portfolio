import { useState, createContext } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
