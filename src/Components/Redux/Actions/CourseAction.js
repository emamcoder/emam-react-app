import * as Types from "./ActionTypes";

export function createCourse(course) {
  return { type: Types.CREATE_COURSE, course };
}
