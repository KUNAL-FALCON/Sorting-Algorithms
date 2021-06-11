import React from 'react';

/**Import from Module */
import { Navbar } from 'react-bootstrap'

const NavBar = ( { Change }  ) => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Sorting Visualiser</Navbar.Brand>
            </Navbar>
        </>
    )
}
export default NavBar;