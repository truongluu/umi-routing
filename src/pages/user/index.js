/**
 * title: User Page
 * Routes:
 *  - ./src/components/authentication.js
 *   - ./src/components/gallery.js
 *   - ./src/components/footer-top.js
 */
import { connect } from 'dva';

export default connect(({ user }) => ({ user }))(function (props) {
return <h3>User page: {props.user.currentUser}</h3>;
})