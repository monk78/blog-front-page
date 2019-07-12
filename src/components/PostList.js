import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';
class PostList extends React.Component {
    componentDidMount(){
      //this.props.fetchPosts();
      this.props.fetchPostsAndUsers();
    }
    
    renderList(){
        return this.props.posts.map(post =>{
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                     <UserHeader userIdd={post.userId}/>  
                     </div>
                    </div >

            );

        });
    }
    
    render(){
    //    console.log(this.props.posts);
       
       // return <div>postList</div>  

         
      return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
} 
const mapStateToprops =(state) => {
    //console.log(state.posts);
    return { posts:state.posts };
}
export default connect(mapStateToprops,{ fetchPostsAndUsers }) (PostList);
