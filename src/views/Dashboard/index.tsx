import React, { FC } from 'react'
import { Layout, Menu, Skeleton } from 'antd'
import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { useQuery } from 'react-query'

import Api from '../../api'
import Section from './Section'

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

const StyledContentLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const StyledContent = styled(Content)`
  flex: 1;
  overflow: scroll;
  padding: 20px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

const sections = [
  { name: 'recommended', displayName: 'Recommended' },
  { name: 'buynow', displayName: 'Buy Now' },
  { name: 'topselling', displayName: 'Top Selling' }
]

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

      <StyledContentLayout>
        <Header className="site-layout-sub-header-background" />

        <StyledContent>
          {sections.map((section) => (
            <Section title={section.displayName} key={section.name} tag={section.name} />
          ))}
        </StyledContent>
      </StyledContentLayout>
    </StyledLayout>
  )
}

export default Dashboard
