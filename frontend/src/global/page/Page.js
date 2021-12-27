import React from 'react'

function Page(props) {
    return (
        <div className='py-6 bg-gray-50 min-h-[80vh]'> {/* Page at least 80% of vh so footer at bottom */}
            {props.children}
        </div>
    );
}

export default Page
