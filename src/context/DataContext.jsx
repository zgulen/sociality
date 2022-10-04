import { createContext,useState } from "react";
import data from "../utills/data.json"

export const DataContext = createContext(data.posts_by_date)

const DataContextProvider = ({ children }) => {
  const [page, setPage] = useState("")

    return (
        <DataContext.Provider value={{ data, setPage, page }}>
          {children}
        </DataContext.Provider>
      );

}

export default DataContextProvider;