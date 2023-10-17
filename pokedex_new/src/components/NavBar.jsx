import React from 'react';

function NavBar(props) {
  const { onPreviousClick, onNextClick, isPreviousDisabled, isNextDisabled } = props;

  return (
    <div className="nav-bar">
      <button onClick={onPreviousClick} disabled={isPreviousDisabled}>
        Précédent
      </button>
      <button onClick={onNextClick} disabled={isNextDisabled}>
        Suivant
      </button>
    </div>
  );
}

export default NavBar;