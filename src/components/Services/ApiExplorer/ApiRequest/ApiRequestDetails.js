import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ApiRequestDetails extends Component {
  render() {
    const styles = require('../ApiExplorer.scss');
    return (
      <div className={styles.apiRequestWrapper + ' ' + styles.apiContentPadd} style={{padding:0, border:0}}>
        {/* <div className={styles.apiRequestContent}>{this.props.description}</div>
        <div className={styles.apiHasura}>
          <a href="https://github.com/chaingraph" target={'_blank'}>
            <i className="fa fa-github" />
          </a>
        </div> */}
      </div>
    );
  }
}

ApiRequestDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ApiRequestDetails;
