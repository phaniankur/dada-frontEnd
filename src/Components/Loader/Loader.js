import React from 'react'
import Box from '../Library/Box'
import './loader.css'
function Loader() {
    return (
        <Box
        height= '100vh'
        display = 'flex'
        justifyContent = 'center'
        alignItems = 'center'
        flexDirection = 'column'
        >
            <div class="lds-default">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        </Box>

    )
}

export default Loader
