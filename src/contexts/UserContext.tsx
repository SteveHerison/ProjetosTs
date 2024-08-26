import { createContext, ReactNode, useState } from "react";

type ContextType = {
  name: string;
  setName: (n: string) => void;
};

export const UserContext = createContext<ContextType | null>(null);

type Props = { children: ReactNode };
export const UserProvider = ({ children }: Props) => {
  const [name, setName] = useState("undefined");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
