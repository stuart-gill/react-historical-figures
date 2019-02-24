import React from "react";
import PropTypes from "prop-types";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this._name = null;
    this._authors = null;
    this._shortDescription = null;
    this._languages = null;
    this._link = null;
    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
  }

  //why is 'this' reading as null? Line 17. Can't retrieve this.props
  handleAddingNewProject(event) {
    event.preventDefault();
    this.props.onAddingNewProject({
      name: this._name.value,
      authors: this._authors.value,
      shortDescription: this._shortDescription.value,
      languages: this._languages.value,
      link: this._link.value
    });
  }

  // selectedProject: PropTypes.string,
  // onSelectProject: PropTypes.func,
  // name: PropTypes.string.isRequired,
  // languages: PropTypes.arrayOf(String).isRequired,
  // shortDescription: PropTypes.string.isRequired,
  // authors: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  // img: PropTypes.string,
  // key: PropTypes.number,
  // projectId: PropTypes.string

  render() {
    return (
      <div>
        {/* DOM trigger onSubmit only works with button type = submit */}
        <form onSubmit={this.handleAddingNewProject}>
          <input
            type="text"
            id="name"
            placeholder="Name of project"
            ref={input => {
              this._name = input;
            }}
          />
          <input
            type="text"
            id="authors"
            placeholder="Project authors"
            ref={input => {
              this._authors = input;
            }}
          />
          <textarea
            id="shortDescription"
            placeholder="Short description"
            ref={textarea => {
              this._shortDescription = textarea;
            }}
          />
          <input
            type="text"
            id="languages"
            placeholder="Project languages"
            ref={input => {
              this._languages = input;
            }}
          />
          <input
            type="text"
            id="link"
            placeholder="Project link"
            ref={input => {
              this._link = input;
            }}
          />
          <button type="submit">Submit project</button>
        </form>
      </div>
    );
  }
}

Admin.propTypes = {
  onAddingNewProject: PropTypes.func
};

export default Admin;
