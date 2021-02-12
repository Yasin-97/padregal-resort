import React from 'react';
import Room from './Room'

const RoomsList = ({ rooms }) => {
    if (rooms.length === 0) {
        return (<div className="empty-search"><h3>unfortunately matched your search parameters</h3></div>
        
        )
    };
    return (
        <section className="roomslist"><section className="roomslist-center">
            {rooms.map((item)=> {return <Room key={item.id} room={item}/>})}
        </section></section>
    )
}

export default RoomsList;
