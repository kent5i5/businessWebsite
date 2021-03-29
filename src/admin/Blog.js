import React, { Component } from "react";
import { withAuthenticator, AmplifySignOut ,AmplifyChatbot} from '@aws-amplify/ui-react';
import { Button , Tab, Row, Col, Nav} from 'react-bootstrap';
import Login from "./Login";
import AuthButton from "./AuthButton";
import { Link } from "react-router-dom";
import Analysis from "../business/Analysis";


// graphyql
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

       // (async () => {
        //     const result = await client.mutate({
        //       mutation: gql(createBlog),
        //       variables: {
        //         input: {
        //             id: "111",
        //             title: "blog1",
        //             createdAt: Date,
        //             updatedAt: Date,
        //              owner: "ken",
        //         }
        //       }
        //     });
        //     console.log(result.data.createTodo);
        //   })();

   // Simple query
//    const allTodos = await API.graphql({ query: queries.listBlogs });
//    console.log(allTodos); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

   // Query using a parameter
  // const oneTodo = await API.graphql({ query: queries.getTodo, variables: { id: 'some id' }});

class Blog extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        console.log('starting')
       
        this.state = { 
            blogname: [],
            blogid: [],
            postTitle: '' , 
            postContent: ''
        };
       // this.createBlog()
        this.fetchBlogs()
        this.fetchPosts()
       // this.deleteBlogs()
      }

      componentWillUnmount(){
        
      }

    async createBlog() {
        console.log('create blog')
        try {
            const post = {
                id: "",
                title: "",
                createdAt: "",
                updatedAt: "",
                owner: ""
            }
   
            const newBlog = {
                        name: "Secondblog"
                  
              };
            const newTodo = await API.graphql({ query: mutations.createBlog, variables: {input:newBlog}})
        //   const blogs = blog.data
        //   setActors(blogs)
       
        } catch (err) {
          console.log('error creating blogs') }
    }
    
        async fetchBlogs() {
            try {
              const blogData = await API.graphql({query: queries.listBlogs})
              const blogs = blogData.data.listBlogs.items
              console.log('blogs: ' + blogs[0].name ) 
              //setTodos(blogs)
              const names = [blogs[0].name , blogs[1].name]
              this.setState({
                blogname: names ,
                blogid : blogs[0].id
              });
                
            
            } catch (err) { console.log('error fetching blog') }
          }
          
          async deleteBlogs() {
            try {
                const blogData = await API.graphql({query: queries.listBlogs})
                const blogs = blogData.data.listBlogs.items
                const deletedblog  =  await API.graphql({query: mutations.deleteBlog, variables: {input: {id: blogs[0].id}}})
                console.log(deletedblog)
                
        } catch (err) { console.log('error delete blog') }
      }
             
      // post functions
        async createPost() {
        const post = {
            title: this.state.postTitle,
            content: this.state.postContent,
            postBlogId: this.props.blogId // Or where your blogId data lives
        }
        await API.graphql({query: mutations.createPost , variables: {post}})
        console.log('post successfully created')
        }

        async fetchPosts() {
            try {
              const blogData = await API.graphql({query: queries.getBlog, variables: {id: "b3c1edb9-1aaf-4ae0-8930-507339708d27"}})
              const blogs = blogData.data.getBlog
               console.log(blogs.posts.items[0].id) 
              //setTodos(blogs) e0cbc305-3185-4da8-965f-cc724d99a090
              const postDate = await API.graphql({query: queries.getPost, variables: {id: blogs.posts.items[0].id}})
              
              console.log(postDate.data.getPost.title)
              this.setState({
                postTitle:  postDate.data.getPost.title
              });
            
            } catch (err) { console.log('error fetching post') }
          }
 
    render() {
        
        return (
            
            <div>

            <div>
            
            <table class="center">
            <tr>
                <th>BLog name</th>
                <th>Post</th>
                <th>Comment</th>
            </tr>
            <tr>
                <td>{this.state.blogname[0]}</td>
                <td>{this.state.postTitle}</td>
                <td>null</td>
            </tr>
            <tr>
                <td>null</td>
                <td>null</td>
                <td>null</td>
            </tr>

            </table>
                

            </div>

            <Button  variant="secondary"><Link exact to="/">Home</Link></Button>

       
            </div>

       
        )
    }
}

export default withAuthenticator(Blog);