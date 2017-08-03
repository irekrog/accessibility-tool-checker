import React, {Component} from 'react';
import SearchInput from '../component/SearchInput';
import ChooseProblems from '../component/ChooseProblems';
import ChooseTools from '../component/ChooseTools';
import HtmlSource from '../component/HtmlSource';

import axios from 'axios';
import AcheckerContainer from "./achecker/AcheckerContainer";

export default class MainContainer extends Component {
  state = {
    results: [],
    summary: '',
    html: '',
    link: '',
    startApp: true,
    loading: false,
    checkboxes: [],
    checkboxesTools: [],
    tools: []
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
  };

  handleCheckboxTools = (checkbox) => {
    this.setState({
      checkboxesTools: checkbox
    });
  };

  sendRequest = () => {
    this.setState({
      loading: true
    });
    console.log(this.state.tools);
    console.log(this.state.tools);
    axios.post('/data', {
      url: this.state.link,
      tools: this.state.checkboxesTools
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          results: response.data.results,
          summary: response.data.summary,
          // html: response.data[0].html,
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
        <AcheckerContainer
          summary={this.state.summary}
          results={this.state.results}
          values={this.state.checkboxes}
        />
      </div>;
    }

    return (
      <div>
        <SearchInput handleInput={this.handleInput} sendRequest={this.sendRequest}/>
        {/*<HtmlSource sourceHtml={this.state.html} />*/}
        <ChooseTools handleCheckboxTools={this.handleCheckboxTools} values={this.state.checkboxesTools} />
        <ChooseProblems handleCheckbox={this.handleCheckbox} values={this.state.checkboxes} />
        {list}
      </div>
    )
  }
}
