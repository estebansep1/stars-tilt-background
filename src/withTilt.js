import React from 'react';
import Tilt from './Tilt';
import './Tilt.css';

export default (ComponentToRender) => 
    class extends React.Component {
        render() {
            const { ...props } = this.props;
            return (
                <div className='hoc-wrapper'>
                    <div className="tilt-wrapper">
                        <Tilt />
                    </div>
                    <ComponentToRender {...props} />
                </div>
            );
        }
    };
