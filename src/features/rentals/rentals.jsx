/** @format */

import React, { Component } from "react";
import axios from "axios";
const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
axios.interceptors.response.use(null,(error)=>{
const expectedError = error.response && error.response.status > 400 && error.response.status < 500;
if(!expectedError){
    console.log('log errors',error);
    alert("an unexpected error occur"); 
}
return Promise.reject(error);
});
class Rentals extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };
  handlePost = async (post) => {
    post.title = "update";
    await axios.put(`${apiEndpoint}/${post.id}`, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const prevState = [...this.state.posts];
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await axios.delete(`${apiEndpoint}/${post.id}`);
    } catch (ex) {
      console.log('error is called');
      if(ex.response && ex.response.status === 404)
      alert("posts allready deleted");
      
      this.setState({ posts: prevState });
    }
  };
  render() {
    return (
      <div>
        <button className='btn btn-sm btn-primary' onClick={this.handleAdd}>
          Add
        </button>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>
                  <button
                    className='btn btn-sm btn-primary'
                    onClick={() => this.handlePost(data)}>
                    update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={() => this.handleDelete(data)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Rentals;
