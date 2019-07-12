import React from 'react';
import {connect} from 'react-redux';
//import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    // componentDidMount(){
    //     this.props.fetchUser(this.props.userIdd);
    // }
    render(){
        const{user}=this.props;
       // const user=this.props.users.find(user => user.id === this.props.userId); 
        if(!user)return <div>loading</div>;
        return <div className="header">{user.name}</ div> ;
    }
}
const mapStateToProps=(state,own)=>{
    console.log(own);
    return {user:state.users.find(user=>user.id===own.userIdd)};
} ;
//export default connect(mapStateToProps,{fetchUser})(UserHeader);
export default connect(
mapStateToProps
)(UserHeader);