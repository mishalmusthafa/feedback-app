function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, text: 'This is comment 1' },
    { id: 2, text: 'This is comment 2' },
    { id: 3, text: 'This is comment 3' },
  ];
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <div className="comments">
        <h3>comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id}>{comment.text}</li>
            //Above is same as '=> {return <li>{comment.text}</li>}'
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;