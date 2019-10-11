/* jshint esversion : 9  */
import React, { Component } from "react";

import folio from "../DataFolio";

const WorksContext = React.createContext();

export default class WorksProvider extends Component {
  constructor() {
    super();
    this.state = {
      name: `Prince letsyo`,
      about: `My name is Prince Letsyo, I am a graphic design and a web and mobile app developer.
              I have created Brand identities for many companies. I have also worked with team of 
              both designers and developers, this has helped me build experience in both fields.  
              I personally, use my creative skills to solve problems in the society, to make connectivity 
              a possibility among people of different backgrounds. Over the years, I have worked in the 
              design industry and IT industry, this has given me the opportunity to build a strong 
              understanding on how these two industries can work hand in hand to solve problems.`,
      works: [],
      webWork: [],
      photoWork: [],
      brandWork: []
    };
  }

  componentDidMount() {
    let works = this.folioFetch(folio);
    let webWork = works.filter(work => work.web === true);
    let photoWork = works.filter(work => work.photo === true);
    let brandWork = works.filter(work => work.brand === true);

    this.setState({
      works,
      webWork,
      photoWork,
      brandWork
    });
  }

  folioFetch(folio) {
    let artWorks = folio.map(foli => {
      let id = foli.sys.id;
      let images = foli.fields.image.map(image => image.fields.file.url);

      let workInfo = { ...foli.fields, images, id };
      return workInfo;
    });
    return artWorks;
  }

  getWork = artName => {
    let tempWork = [...this.state.works];
    const artWorks = tempWork.find(work => work.artName === artName);

    return artWorks;
  };

  render() {
    return (
      <div>
        <WorksContext.Provider value={{ ...this.state, getWork: this.getWork }}>
          {this.props.children}
        </WorksContext.Provider>
      </div>
    );
  }
}

const WorksConsumer = WorksContext.Consumer;

export { WorksConsumer, WorksProvider, WorksContext };
