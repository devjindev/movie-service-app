import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(
                <div className="movie-detail">
                    <span>상세페이지 준비 중입니다 . . . 🐱‍🏍</span>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default Detail;