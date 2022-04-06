import React from "react";
import {Link} from 'react-router-dom'


const Nav = () => {


    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/post-entry">Post Entry</Link>
        </div>
    )


}

export default Nav