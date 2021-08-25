class VoteApp extends React.Component {
  constructor(props) {
    super(props);

    // Initializing, with default values
    this.state = {
      votes: [
        { name: "react", count: 0 },
        { name: "angular", count: 0 },
        { name: "vue", count: 0 },
      ],
    };

    this.updateVote = this.updateVote.bind(this);
  }

  // Updating
  updateVote(choiceName) {
    this.setState({
      votes: this.state.votes.map((vote) => {
        if (choiceName === vote.name)
          return { name: vote.name, count: vote.count + 1 };
        else return vote;
      }),
    });
  }

  // Subscribing / Listening (Reacting to state change)
  render() {
    // Consuming
    return (
      <div>
        {this.state.votes.map((choice) => (
          <button
            key={choice.name}
            onClick={() => {
              // Triggering of updates
              this.updateVote(choice.name);
            }}>
            {choice.name} » {choice.count}
          </button>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<VoteApp />, document.getElementById("react-app"));

// Ideally, without model + view-controller coupling:
const VoteComponent = ({ votes, updateVote }) => {
  return (
    <div>
      {votes.map((choice) => (
        <button
          key={choice.name}
          onClick={() => {
            updateVote(choice.name);
          }}>
          {choice.name} » {choice.count}
        </button>
      ))}
    </div>
  );
};
