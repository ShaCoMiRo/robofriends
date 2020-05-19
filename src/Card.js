import React, { Fragment } from 'react';

const Card = ({ id, name, email }) => {
    //아래의 JSX 문법을 인식하기 위해서는 React를 import 해야 한다.
    return (
        <Fragment>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;