import React from 'react';
import SideDrawer from './sideDrawer';
const DrawerView = props => {
  const { menu } = props;
  return (
    <>
      <SideDrawer menu={menu} />
    </>
  );
};

export default DrawerView;
