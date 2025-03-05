import "./App.css";
import Button from "./Components/Elements/Button";
import Header from "./Components/Layout/Header";
import Post from "./Components/Post";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-4">
              <Post></Post>
              <Post></Post>
          </div>
          <div className="col-2">
            <div className="card mt-2">
              <div className="card-body text-center">
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
