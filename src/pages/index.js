import styles from './index.css';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-locale';

export default connect(
  ({
    user
  }) => ({
    user
  })
)(function(props) {
  console.log('props', props)
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
});
