import React, { ReactNode, createContext, useContext, useState } from "react";

type MyContextType = {
  isActived: boolean;
  data: Record<string, any>;
  toogleActived: (value: boolean) => void;
  updateData: (newData: Record<string, any>) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isActived, setIsActived] = useState(false);
  const [data, setData] = useState<Record<string, any>>({});
  const toogleActived = (value: boolean) => {
    setIsActived(value);
  };
  const updateData = (newData: Record<string, any>) => {
    setData(newData)
  };
  return <MyContext.Provider value={{ isActived, data, toogleActived, updateData }}>
    {children}
  </MyContext.Provider >
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');

  }
  return context
}