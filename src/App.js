import { Children } from "react";
import "./App.css";
import Button from "./Components/Elements/Button";
import Header from "./Components/Layout/Header";
import Post from "./Components/Post";

function App() {

  var posts = [
    {id: 1, title: "this is post", content: "lorem ipsum dolor sit amet"},
    {id: 2, title: "this is post", content: "loram ipsum dolor sit amet lorem ipsum dolor sit amet"},
    {id: 3, title: "this is post", content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}, 
    {id: 4, title: "this is post", content: "thie is the content of the post"}
  ]


  var buttons = [
    {id: 1, title: "click me",Children: <i className='fa fa-plus'>+</i>},
    {id: 2, title: "new button"},
    {id: 3, title: "this is a button"}];


  var postsList = posts.map((post) => {
    return <Post key={post.id} title={post.title} content={post.content}></Post>
  });


  var buttonsList = buttons.map((button) => {
    return <Button key={button.id} title={button.title}> {button.Children != null ? button.Children : ""} </Button>
  }
  );

  return (
    <>
      <Header></Header>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-4">
              {postsList}
          </div>
          <div className="col-2">
            <div className="card mt-2">
              <div className="card-body text-center">
                {buttonsList}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
