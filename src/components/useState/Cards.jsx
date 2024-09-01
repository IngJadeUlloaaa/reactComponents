import React, { useState } from 'react'
import './Cards.css'

function Cards() {
    const [cards, setCards] = useState(true);

    const showCards = () => {
        setCards(true)
    }
    
    const hideCards = () => {
        setCards(false)
    }

  return (
    <div>
        <article className='father-container'>
            <div className='navbar-btn-container'>
                <button onClick={showCards}>Card 1</button>
                <button onClick={hideCards}>Card 2</button>
            </div>
        
            <div className='card-container' style={{ display: cards ? 'block' : 'none' }}>
                <h3 className='title-card-container'>card 1</h3>
                <p className='p-card-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus illo neque quos magni voluptatibus pariatur architec</p>
                <button className='btn-card-container'>Leer mas</button>
            </div>

            <div className='card-container' style={{ display: cards ? 'none' : 'block' }}>
                <h3 className='title-card-container'>card 2</h3>
                <p className='p-card-container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus illo neque quos magni voluptatibus pariatur architec</p>
                <button className='btn-card-container'>Leer mas</button>
            </div>
        </article>
    </div>
  )
}

export default Cards
