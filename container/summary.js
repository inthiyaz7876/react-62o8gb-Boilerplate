import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const initialState = {

};

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // const { startDateTime: nextStartDateTime, endDateTime: nextEndDateTime } = nextProps;
    // const { startDateTime: curStartDateTime, endDateTime: curEndDateTime } = this.props;


    // if ((curStartDateTime !== nextStartDateTime || curEndDateTime !== nextEndDateTime || curType !== nextType)) {
    //   this.onloadPage({ startDate: nextStartDateTime, endDate: nextEndDateTime, type: nextType });
    // }
  }

  componentWillUnmount() {

  }

//   onloadMetrics = (params) => {
//     const { actions, startDateTime, endDateTime, getData } = this.props;
//     const { getData } = actions;
// getData();

//   }


  render() {
    const {  } = this.props;
    const {  } = this.state;


    return (
      <div className="app-container">
        <div className="content-container">
         hello world
        </div>
      </div>
    )
  }
};

Summary.propTypes = {
  intl: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //one: state.appConfig.one,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Summary));