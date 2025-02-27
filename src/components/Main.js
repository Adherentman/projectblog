import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';
import AppFooter from './AppFooter';

class Main extends React.Component {
  render() {
    const container = {
      marginTop: '6%',
      marginLeft: '20%',
      marginRight: '2%',
      marginBottom: '3%',
    };

    const { children, selectedDrawer } = this.props;
    return (
      <div>
        <AppHeader />
        {selectedDrawer && <AppDrawer value={selectedDrawer} />}
        <div style={container}>{children}</div>
        <AppFooter />
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(Main);
