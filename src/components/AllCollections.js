import React, { Component } from "react";
import NewSingleItem from "./NewSingleItem";
import ReactDOM from 'react-dom';

const articles = "https://www.healthcare.gov/api/articles.json";
const blogs = "https://www.healthcare.gov/api/blog.json";
const questions = "https://www.healthcare.gov/api/questions.json";
const glossary = "https://www.healthcare.gov/api/glossary.json";
const states = "https://www.healthcare.gov/api/states.json";
const topics = "https://www.healthcare.gov/api/topics.json";
let articlesRes;

class AllCollections extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: []
  //   };
  // }

  componentDidMount() {
    fetch(articles)
      .then(allResponses => {
        articlesRes = allResponses[0];

        // Promise.all([
        // fetch(articles),
        // fetch(blogs),
        // fetch(questions),
        // fetch(glossary),
        // fetch(states),
        // fetch(topics),
        // ]).then(allResponses => {
        //   let articlesRes = allResponses[0]
        // let blogsRes = allResponses[1]
        // let questionsRes = allResponses[2]
        // let glossaryRes = allResponses[3]
        // let statesRes = allResponses[4]
        // let topicsRes = allResponses[5]

        // ReactDOM.render(
        //   <Test articlesRes={articlesRes} />,
        //   // <Test articlesRes={articlesRes} blogsRes={blogsRes} questionsRes={questionsRes} glossaryRes={glossaryRes} statesRes={statesRes} topicsRes={topicsRes} />,
        //   document.getElementById("main")
        // );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p articlesRes={articlesRes}></p>
      </div>
    );
  }
}

export default AllCollections;


  // Promise.all([
  //   fetch(articles),
  //     fetch(blogs),
  //     fetch(questions),
  //     fetch(glossary),
  //     fetch(states),
  //     fetch(topics),
  //     ]).then(([articles, blogs, questions, glossary, states, topics]) => {
  //   ReactDOM.render(
  //     <Test articles={articles} blogs={blogs} questions={questions} glossary={glossary} states={states} topics={topics}/>,
  //     document.getElementById('main');
  //     );
  //   }).catch ((err) => {
  //     console.log(err);
  //   });

  // componentDidMount() {
  //   fetch(title_URL)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({ items: data
  //           .filter(item => !!item.title)
  //           .map(item => ({
  //             title: item.title,
  //             url: `http://www.healthcare.gov${item.url}`,
  //             content: item.content
  //           })) });
  //     })
  //     .catch(error => console.log(error));
  // }

  // renderItems() {
  //   return this.state.items.map(item => (
  //     <li>
  //       <NewSingleItem key={item.title} item={item} />
  //     </li>
  //   ));
  // }

  // render() {
  //   console.log(this.state)
  //   return <ul>{this.renderItems()}</ul>;
  // }
// }

// export default AllCollections;
