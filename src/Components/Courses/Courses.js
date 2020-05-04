import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../Redux/Actions/CourseAction";
import PropType from "prop-types";

class Courses extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Cource</h3>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((cours) => (
          <div key={cours.title}>{cours.title}</div>
        ))}
      </form>
    );
  }
}

Courses.PropType = {
  course: PropType.any.isRequired,
  dispatch: PropType.func.isRequired,
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}
export default connect(mapStateToProps)(Courses);
