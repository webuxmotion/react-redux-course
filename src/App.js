import React from 'react';
import { useSelector } from 'react-redux'
import PostForm from './components/PostForm';
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts';
import Alert from './components/Alert'

function App() {
  const alertMessage = useSelector(state => state.app.alertMessage)

  return (
    <div className="container pt-3">
      {alertMessage && <Alert text={alertMessage} />}
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
