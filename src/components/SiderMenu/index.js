import React from 'react'
import SiderMenu from './SiderMenu';
import { Drawer } from 'antd';

const SiderMenuWrapper = (props) => {
  const { collapsed, isMobile, onClose } = props;
  return (
    isMobile ? (
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={!collapsed}
        style={{
          padding: 0,
        }}
      >
        <SiderMenu { ...props } />
      </Drawer>
    ) : (
      <SiderMenu { ...props } />
    )
  )
}

export default SiderMenuWrapper
