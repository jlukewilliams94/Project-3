import React from 'react';
const AgeContext = React.createContext({
    verified : undefined,
    onVerify: ()=> undefined
})

export default AgeContext
