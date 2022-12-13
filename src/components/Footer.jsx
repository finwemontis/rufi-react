import React from "react";
import { Layout } from "antd";
const { Footer } = Layout

export default function MyFooter() {
  return (
    <Footer style={{
        textAlign: 'center',
        position: 'sticky',
        bottom: '0'
    }}>
      this is a footer that I just write
    </Footer>
  )
}
