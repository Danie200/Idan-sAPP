import { createContext,useState } from "react";

const AppContext = createContext()

function AppProvider({children}) {
    const [userNames,setuserNames] = useState({fName:null,lName:null});
    const [uid,setUid] = useState('jjj');

    return(
        <AppContext.Provider value={{userNames,setuserNames,uid,setUid}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}