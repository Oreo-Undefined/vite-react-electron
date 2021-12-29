import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './style.module.less';

const { Header, Sider, Content } = Layout;
const env = import.meta.env.MODE

export default function BaseLayout() {
  const { pathname } = useLocation();
  return (
    <Layout theme="light" className={styles.Layout}>
      <Menu theme="light" mode="horizontal" selectedKeys={[pathname]}>
        <Menu.Item key="/"><Link to="/">home</Link></Menu.Item>
        <Menu.Item key="/about"><Link to="/about">about</Link></Menu.Item>
        <Menu.Item key="/dynamic/123"><Link to="/dynamic/123">dynamic</Link></Menu.Item>
      </Menu>
      <Layout>
        <Sider className={styles.Sider} theme="light">mode: { env }</Sider>
        <Content className={styles.Content}><Outlet /></Content>
      </Layout>
    </Layout>
    
  );
}
