import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
         this.state={
            count:0,
            count2:2,
         }
    }
    render(){
        const{name,location}=this.props;
        const{count}=this.state;
        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    });
                }}
                >
                Count Increase </button>
        <h2>{this.props.name}</h2>
        <h3>{this.props.location}</h3>
        <h3> @Rakesh</h3>
       </div>
       );
    }
}
export default UserClass;