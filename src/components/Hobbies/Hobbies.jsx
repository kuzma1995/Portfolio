import React from 'react';
import './hobbies.css';
import coding from '../../assets/coding.jpg';
import gym from '../../assets/gym.jpg';
import pizza from '../../assets/pizza.jpg';

const Hobbies = () => {
  return (
    <div className='hobbies__container'>
        <div className="hobby__container">
            <h3>Coding</h3>
            <img src={coding} alt="coding-image" />
            <p className='hobby-des'>As mentioned above, coding is my everyday learning and practicing thing. Everyday is new day with new challenge and new lesson learned</p>
        </div>

        <div className="hobby__container">
            <h3 className="hobby-heading">Gym</h3>
            <img src={gym} alt="coding-image" />
            <p className='hobby-des'>Gym is my passion and some kind of relaxation. Coding and Gym have one big common thing: DEDICATION. Without it you won't succeed.</p>
        </div>

        <div className="hobby__container">
            <h3 className="hobby-heading">Cooking & Baking</h3>
            <img src={pizza} alt="coding-image" />
            <p className='hobby-des'>I love some tasty, good looking meals and I love to make them myself. It is alot connected with my lifestyle. But my own Neapolitan Pizza is something that everyone loves!</p>
        </div>

    </div>
  )
}

export default Hobbies;