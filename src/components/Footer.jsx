import React from "react";
import { Layout } from "antd";
const { Footer } = Layout

// footer的问题到时候再说了
export default function MyFooter() {
  return (
    <Footer style={{
        textAlign: 'center',
        // position: 'sticky',
        bottom: '0'
    }}>
      this is a footer that I just write
    </Footer>
  )
}
