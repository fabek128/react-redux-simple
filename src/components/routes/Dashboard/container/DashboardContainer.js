/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import * as WordActions from '../../../../actions/wordActions';
import store from '../../../../store/index';


class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      returnedText: '',
    };

    store.subscribe(() => {
      const stateUpdated = store.getState();
      this.setState({ returnedText: stateUpdated.wordReducers.text });
    });

    this.onTextChange = this.onTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { WordActions } = this.props;
    const { text } = this.state;
    WordActions.postWord(text);
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { returnedText } = this.state;
    return (
      <Dashboard
        {...this.props}
        {...this.state}
        onTextChange={this.onTextChange}
        onSubmit={this.handleSubmit}
        returnedText={returnedText}
      />
    );
  }
}

const mapStateToProps = state => ({
  text: state.text,
  returnedText: state.returnedText,
});

const mapDispatchToProps = dispatch => ({
  WordActions: bindActionCreators(WordActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);