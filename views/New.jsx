const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a New Pokemon</h1>
        <form action="/pokemon" method="post">
          <label>Name:</label>
          <input type="text" name="name" required /><br />
          <label>Image URL:</label>
          <input type="text" name="img" required /><br />
          <button type="submit">Create Pokemon</button>
        </form>
      </div>
    );
  }
}

module.exports = New;
