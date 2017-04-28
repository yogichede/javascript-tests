import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
/* loadindDots only loads if loading is true*/
const Header = (loading) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {loading && <LoadingDots interval={100} dots={3}/>}
        </nav>
    );
};

Header.propTypes = {
    loading : PropTypes.bool.isRequired
};

export default Header;