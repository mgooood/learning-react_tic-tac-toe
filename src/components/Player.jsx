import { useEffect, useRef, useState } from 'react';

export default function Player({ name, symbol, isActive, onPlayerEditName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const playerInputRef = useRef();

  useEffect(() => {
    if (playerInputRef.current) {
      playerInputRef.current.focus();
    }
  }, [isEditing]);

  function handleEditClick() {
    setIsEditing((previous) => !previous);

    if (isEditing) {
      onPlayerEditName(symbol, playerName);
    }
  }

  function handleInputChange(e) {
    setPlayerName(e.target.value);
  }

  let buttonText = 'Edit';
  let playerEl = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    buttonText = 'Save';
    playerEl = (
      <input
        type='text'
        value={playerName}
        onChange={handleInputChange}
        ref={playerInputRef}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {playerEl}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick} type='button'>
        {buttonText}
      </button>
    </li>
  );
}
