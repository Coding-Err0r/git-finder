import React from 'react';
import { Logo } from '../Logo';
import { ToggleButton } from '../ThemeToggle';

export const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Logo>
        <img src="github.png" style={{ width: '40px', height: '40px', backgroundColor: '#fff', borderRadius: '50%' }} />{' '}
        <h3 style={{ marginTop: '-60px', marginLeft: '60px' }}>FINDER</h3>
      </Logo>
      <ToggleButton />
    </div>
  );
};
