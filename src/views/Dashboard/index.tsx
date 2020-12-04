import React, { FC } from 'react'
import { Layout, Menu, Skeleton } from 'antd'
import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { useQuery } from 'react-query'

import Api from '../../api'

const { Header, Content, Sider, Footer } = Layout

const StyledLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
`

const StyledLogo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
`

const sections = ['recommended', 'buynow', 'topselling']

const Dashboard: FC = () => {
  const { data: categories, isLoading } = useQuery('categories', Api.getCategories)

  return (
    <StyledLayout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <StyledLogo>E Shop</StyledLogo>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>

          {categories?.map((category) => {
            return (
              <Menu.Item key={category.alias} icon={<VideoCameraOutlined />}>
                {category.title}
              </Menu.Item>
            )
          })}

          <Skeleton loading={isLoading} paragraph={{ rows: 4 }} />
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </StyledLayout>
  )
}

export default Dashboard
