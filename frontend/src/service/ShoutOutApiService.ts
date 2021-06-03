import axios from "axios";
import ShoutOuts from "../model/shoutOuts";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function readAllShoutOuts():Promise<ShoutOuts[]> {
  return axios.get(baseUrl).then(res => res.data);
}

export function createShoutOut(shoutOut: ShoutOuts):Promise<ShoutOuts> {
  return axios.post(baseUrl, shoutOut).then(res => res.data);
}

export function deleteShoutOut(shoutOutId: string):Promise<void> {
  return axios.delete(`${baseUrl}/${encodeURIComponent(shoutOutId)}`);
}