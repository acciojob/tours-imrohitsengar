import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <header>
          <h4>{name}</h4>
          <span className="tour-price">${price}</span>
        </header>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="show-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? " See less" : " Show more"}
          </button>
        </p>
      </div>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
}

export default Tour;
