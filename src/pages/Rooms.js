import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer'
const Rooms = () => {
    return (
        <div>
            <Hero hero='roomsHero'>
                <Banner title='our rooms'><Link to='/' className='btn-primary'>return home</Link></Banner>
            </Hero>
            <RoomsContainer />
        </div>
    )
}

export default Rooms