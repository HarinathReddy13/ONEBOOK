import { createContext } from "react";
import { venues } from '../assets/assets'

export const AppContext = createContext()

const AppContextProvider = (props) => {

  

  const value = {
    venues
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}

export default AppContextProvider