import React from 'react';

const Card = ({ id, title, description, short_desc, tags, image, url }) => (
    <div className="card text-light">
        <div className='container-fluid full-height'>
            <div class="row text-light text-center">
                <div class="col">
                    <img src={process.env.PUBLIC_URL + image} alt={title} className="card-img" />
                    <div style={{height: '0.2em'}}/>
                    <h5><a href={url} target="_blank">{title}</a></h5>
                </div>
            </div>
            <div class="row flex-grow">
                <div class="col align-self-center">
                    <small className='text-secondary'>{short_desc}</small>
                </div>
            </div>
            <div class="row text-light text-center">
                <div class="col">
                    <div className="tags">
                        {tags.map((tag) => (
                            <span key={tag} className="card-tag badge bg-dark">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    </div >
);

export default Card;
