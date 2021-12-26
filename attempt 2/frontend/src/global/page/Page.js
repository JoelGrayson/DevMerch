import React from 'react'

function Page(props) {
    return (
        <div className='py-6 bg-gray-50'>
            {props.children}
        </div>
    );
}

export default Page
