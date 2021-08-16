import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button';

export default function Header({title, onAdd, showAddTask}) {
    const onClick =() => {
        console.log("You've clicked");
    }
    return (
        <header className='header'>
            <h1>{title}</h1> 
            <Button onClick={onAdd} 
                color={!showAddTask ? 'pink' : 'grey'} 
                text={!showAddTask ? 'Add a Task' : 'Close'}/>
        </header>
    )
}

Header.defaultProps = {
    title :'Tast Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
