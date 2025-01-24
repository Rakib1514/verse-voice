import axios from "axios";

export async function postData() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users data");
  }
}
