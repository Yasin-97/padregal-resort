import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer }from 'react-icons/fa'
import Title from './Title'
import { log } from 'util';

export default class Services extends Component {
    state = {
        services: [
            {icon:<FaCocktail/>,title:"free Cocktails",info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aspernatur!'}
            ,{icon:<FaHiking/>,title:"Endless Hiking",info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aspernatur!'}
            ,{icon:<FaShuttleVan/>,title:"Free Shuttle",info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aspernatur!'}
            ,{icon:<FaBeer/>,title:"Strongest Beer",info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aspernatur!'}
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">{this.state.services.map((item, index)=> {
                    return (
                        
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                    </article>
                    )
                })}</div>
            </section>
        )
    }
}
