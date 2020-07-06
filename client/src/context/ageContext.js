import React from 'react';
const AgeContext = React.createContext({
    verified : undefined,
    onVerify: ()=> undefined,
    total: undefined,
    changeTotal: undefined
})

export default AgeContext
