import React from 'react'

const Square = ({ value, onClick }) => {
    return (
        <>
            <div
                onClick={onClick}
                style={{
                    border: '2px solid black',
                    height: '100px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '50px'
                }} className="square">
                <h5>{value}</h5>
            </div>
        </>
    );
}

export default Square