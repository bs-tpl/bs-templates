import React from 'react';
// import PropTypes from 'prop-types';
import {
  connect,
} from 'dva';

import styles from './index.less';

function Home(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

// Home.propTypes = {
// };

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
