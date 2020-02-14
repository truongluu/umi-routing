import { Menu } from 'antd';
import { Link } from 'umi';

import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Menu mode="horizontal">
        <Menu.Item key='/'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='/user'>
          <Link to='/user'>Users</Link>
        </Menu.Item>
      </Menu>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
