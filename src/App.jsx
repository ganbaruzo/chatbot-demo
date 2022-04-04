import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css';
import {AnswersList} from "./compornents/index";

 export default class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       answers:[],
       chats:[],
       currentId:"init",
       dataset:defaultDataset,
       open:false
     }
   }

initAnswer = () => {
  const initDataset = this.state.dataset[this.state.currentId];
  const initAnswers = initDataset.answers;
  console.log(initAnswers)

  this.setState({
    answers: initAnswers
  })
  }

  componentDidMount(){
      this.initAnswer()
    }

   render(){
  return (
    <section className="c-section">
          <div className="c-box">

              <AnswersList answer={this.state.answers}/>
          </div>
   </section>
  );
 }
}
