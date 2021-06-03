import axios from "axios";
import ShoutOuts from "../model/shoutOuts";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function readAllShoutOuts():Promise<ShoutOuts[]> {
  return axios.get(baseUrl).then(res => res.data);
}

// export function createStudent(student: Student):Promise<Student> {
//   return axios.post(baseUrl, student).then(res => res.data);
// }

// export function deleteStudent(studentId: string):Promise<void> {
//   return axios.delete(`${baseUrl}/${encodeURIComponent(studentId)}`);
// }