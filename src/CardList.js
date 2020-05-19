import React, { Fragment } from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <Fragment>
            <div>
                { 
                robots.map((user, i)=> {
                    return (
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
                }
            </div>
        </Fragment>
    )
}

export default CardList;