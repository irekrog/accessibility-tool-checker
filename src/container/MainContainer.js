import React, {Component} from 'react';
import ListItem from '../component/ListItem';
import GeneralInformation from '../component/GeneralInformation';
import SearchInput from '../component/SearchInput';
import ChooseProblems from '../component/ChooseProblems';
import HtmlSource from '../component/HtmlSource';

import axios from 'axios';

export default class MainContainer extends Component {
  state = {
    results: [],
    summary: '',
    html: '',
    link: '',
    startApp: true,
    loading: false,
    checkboxes: []
  };

  handleInput = e => {
    this.setState({
      link: e.target.value
    })
  };

  handleCheckbox = (checkbox) => {
    this.setState({
      checkboxes: checkbox
    });
    console.log(this.state.checkboxes)
  };

  sendRequest = () => {
    this.setState({
      loading: true
    });
    axios.post('/data', {
      url: this.state.link
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          results: response.data[0].results,
          summary: response.data[0].summary,
          html: response.data[0].html,
          loading: false,
          startApp: false
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let list = null;
    if (this.state.loading) {
      list = <div>Loading...</div>;
    }
    else if (!this.state.startApp) {
      list = <div>
        <GeneralInformation summary={this.state.summary}/>
        <ListItem results={this.state.results} values={this.state.checkboxes} />
      </div>;
    }

    return (
      <div>
        <SearchInput handleInput={this.handleInput} sendRequest={this.sendRequest}/>
        {/*<HtmlSource sourceHtml={this.state.html} />*/}
        <ChooseProblems handleCheckbox={this.handleCheckbox} values={this.state.checkboxes} />
        {list}
      </div>
    )
  }
}
