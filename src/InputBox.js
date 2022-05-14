import React from "react";
class InputBox extends React.Component {
  state = {
    task: "",
  };

  add = (el) => {
    el.preventDefault();
    if (this.state.task === "") {
      return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({task:""});
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui main">
        <form className="ui form"  onSubmit={this.add}>
          <div className="input ui" style={{ margin: "20px" }}>
            <div>
              <input
                type="text"
                name="name"
                value={this.state.task}
                placeholder="Write Your Tasks"
                onChange={(el) => {
                  this.setState({ task: el.currentTarget.value });
                }}
                style={{ padding: "8px" }}
              ></input>
              <button
                className="ui addBtn"
                style={{
                  backgroundColor: "ButtonShadow",
                  padding: "8px",
                  marginLeft: "5px",
                  color: "white",
                }}
              >
                Add Button
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputBox;
