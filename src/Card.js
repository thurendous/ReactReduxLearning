import React from "react";
// import this in order to use JSX



const Card = ({ id, name, email }) => {

    return (
        <div className="tc bg-light-green dib br2 pa3 ma2 grow shadow-5 fl w-23 b--dashed bw1 b--hot-pink dim">
            <img src={`https://robohash.org/${name}`} alt="robos" />
            <div>
                <h2>
                    {id}<br />
                    {name}
                </h2>
                <p>
                    {email}
                </p>
            </div>
        </div >
    );
}

export default Card;