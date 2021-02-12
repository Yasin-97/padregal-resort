import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    // accessing props from react-router-dom *** cool thing
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h5>no such room could be found...</h5>
          <Link to="/rooms" className="btn-primary">
            return to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    // array destructuring to get rest items (except for the first one) using the rest operator
    const [mainImg, ...restImgs] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImgs.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>detailes</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
            
          </div>
        </section>
        <section className="room-extras">
              <h6>extras</h6>
              <ul className="extras">
                {extras.map((item, index) => {
                  return <li key={index}>- {item}</li>;
                })}
              </ul>
            </section>
      </>
    );
  }
}
