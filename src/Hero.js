import React from 'react'
import Main from './components/Main'
import Checkout from './components/Checkout'

function Hero({ handleLogOut }) {
    return (
        <section className='hero'>
            <nav>
                <h2>Welcome to Golden Logs</h2>
                <button onClick={handleLogOut}>Logout</button>
            </nav>
            <div className=''>
                <Main />
            </div>
            <div className='mt-5 text-white text-center'>
                <h1>Copyright © 2023 | Powered by Golden Logs</h1>
            </div>
        </section>
    )
}

export default Hero