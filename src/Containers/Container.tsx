import React from 'react';

const Container = (props: any): React.ReactElement => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default Container;