import React, {Component} from 'react';
import AcheckerContainer from './achecker/AcheckerContainer';
import Pa11yContainer from './pa11y/Pa11yContainer';
import SearchInput from '../component/SearchInput';
import ChooseTools from '../component/ChooseTools';

import axios from 'axios';

import '../css/list-wrapper.css';
import '../css/loading.css';
import '../css/error.css';

export default class MainContainer extends Component {
  state = {
    results: [],
    summary: '',
    pa11y: [],
    html: '',
    link: '',
    storeLink: '',
    startApp: true,
    loading: false,
    checkboxes: ['Error'],
    checkboxesTools: [],
    correctLink: false,
    statusError: ''
  };

  handleInput = e => {
    let link = e.target.value;
    this.setState({ link });
    if ((link === '') || !(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/.test(link))) {
      this.setState({correctLink: false});
    } else {
      this.setState({correctLink: true});
    }
  };

  handleCheckbox = (checkbox) => {
    this.setState({
      checkboxes: checkbox
    });
  };

  handleCheckboxTools = (checkbox) => {
    this.setState({
      checkboxesTools: checkbox,
      startApp: true
    });
  };

  sendRequest = () => {
    this.setState({
      loading: true,
      statusError: '',
      storeLink: this.state.link
    });
    axios.post('/data', {
      url: this.state.link,
      tools: this.state.checkboxesTools
    })
      .then(response => {
        console.log(response);
        this.setState({
          results: response.data.results,
          summary: response.data.summary,
          pa11y: response.data.pa11y,
          loading: false,
          startApp: false
        });
      })
      .catch(error => {
        console.log(error);
        const { status, statusText } = error.response;
        this.setState({
          loading: false,
          startApp: true,
          statusError: `${status}: ${statusText}`
        });
      });
  };

  render () {
    let list = null, loading = null;
    if (this.state.loading) {
      loading = <div className="loading"><span>Loading...</span></div>;
    } else if (!this.state.startApp) {
      list = <div className="list-wrapper">
        <AcheckerContainer
          summary={this.state.summary}
          results={this.state.results}
          values={this.state.checkboxes}
          tools={this.state.checkboxesTools}
          handleCheckbox={this.handleCheckbox}
        />
        <Pa11yContainer
          pa11y={this.state.pa11y}
          tools={this.state.checkboxesTools}

        />
      </div>;
    }

    return (
      <div>
        {loading}
        <SearchInput
          handleInput={this.handleInput}
          sendRequest={this.sendRequest}
          values={this.state.checkboxesTools}
          correctLink={this.state.correctLink}
        />
        <ChooseTools handleCheckboxTools={this.handleCheckboxTools} values={this.state.checkboxesTools} />
        {this.state.statusError && <p className="error">Error {this.state.storeLink}, {this.state.statusError}</p>}
        {list}
      </div>
    );
  }
}
