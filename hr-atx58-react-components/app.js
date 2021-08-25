var GroceryList = (props) => (
  <ul>

    {props.items.map((item) =>
      <GroceryItem item={item} />
    )}

  </ul>
);


class GroceryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList items = {['Apple', 'Banana']}/>, document.getElementById("app"));
