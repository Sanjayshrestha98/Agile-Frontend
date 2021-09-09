import React, { rateProduct } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
export default class Review extends React.Component {


    constructor(props) {
       
        super(props);

        this.state = {
            starhover: 0,
            commentdata: [],
            userRating: 0,
            replydata: [],
            useremail: null,
            empValue: "",
            productid: this.props.productid
        }
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevProps.productid !== this.props.productid) {
            this.setState({
                productid : this.props.productid
            })

        }

        if(prevState.productid !== this.state.productid){
             
        var productid = this.state.productid;


        var data = {
            productid: productid
        }

        var token = localStorage.getItem("token");
        var useremail = localStorage.getItem("user_email");

        this.setState(
            {
                token: token,
                useremail: useremail
            }
        )
        var config = {
            headers: {
                'Authorization': "Bearer " + token,
            }
        }

        //rating
        if (token != null) {
            this.getComments()

            axios.post(`${process.env.REACT_APP_BASE_URI}/getRatingsByUser`, data, config).then((response) => {
                console.log(response)
                if (response.data.success) {
                    this.setState({
                        userRating: response.data.rating.ratings
                    }, () => {

                    
                    })

                }


            })
        } else {

        }



        axios.post(`${process.env.REACT_APP_BASE_URI}/getRatings`, data, config).then((res) => {

            if (res.data.success == true) {
                if (res.data.rating.length != 0) {
                    this.setState({
                        userRating: res.data.rating[0].rating
                    })
                } else {

                }
            } else {

            }

        })
        }
      }

    

    componentDidMount() {
        this.getComments()
    }


    //Function to get the comments
    getComments() {

        var token = localStorage.getItem("token");
        var config = {
            headers: {
                'Authorization': "Bearer " + token,
            }
        }
        var productid = this.state.productid;

        var data = {
            productid: productid
        }

        axios.post(`${process.env.REACT_APP_BASE_URI}/get/comments`, data, config).then((res) => {
            console.log("comments", res)
            var dataarray = res.data.comments;

            this.setState({
                commentdata: dataarray,
            })


        })


    }

    //Handleing Comment 
    handleCommentChange(event) {
        this.setState({ empValue: event.target.value });
    }


    //Function to handle the submission of ratings
    hanldeRating(e) {
        var rating = e.target.id;
        var token = localStorage.getItem("token");

        var productid = this.state.productid;

        var data = {
            productid: productid,
            rating: rating
        }

        var config = {
            headers: {
                "Authorization": token
            }
        }
        axios.post(`${process.env.REACT_APP_BASE_URI}/rateProduct`, data, config).then((response) => {

            this.setState({
                userRating: response.data.rating.rating
            })
            window.location.reload();
        })



    }

    //Function to hanlde the submission of comments
    handleCommentSubmit(e) {
        e.preventDefault();

        var comment = this.refs.comment.value;
        var productid = this.state.productid;
        var token = localStorage.getItem("token");
      
        var data = {
            comment: comment,
            productid: productid
        }
        var config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        }

        axios.post(`${process.env.REACT_APP_BASE_URI}/add/comment`, data,
            config

        ).then(function (data) {

          

        })

        this.getComments()
    }


    //Function to handle the deleting of comments
    handleDeleteComment = (commentId) => {

        var productid = this.state.productid;

        var config = {
            data: {
                commentId: commentId,
                productid: productid
            },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }
        axios.delete(`${process.env.REACT_APP_BASE_URI}/delete/comments`, config).then((res) => {

            var dataarray = res.data.comments;
            console.log(dataarray)
            this.setState({
                commentdata: dataarray
            })
        })
        
        window.location.reload();

    }

    //function to handle the reply to a comment

    handleReplySubmit(commentId) {


        var productid = this.state.productid;
        var reply = this.refs.reply.value;
        var data = {
            commentId: commentId,
            productid: productid,
            reply: reply
        }
        var config = {
            headers: {
                "Authorization": this.state.token
            }
        }



        axios.post(`${process.env.REACT_APP_BASE_URI}/addReply`, data, config).then((res) => {

            var dataarray = res.data.reply;
            this.setState({
                replydata: dataarray
            })

        })
    }


    //Ratig star hover animations
    removestar() {
        this.setState({
            starhover: 0
        })

    }
    starAnimate(e) {
        this.setState({
            starhover: e.target.id
        })
    }

    //end 

    rateProduct(newRating, name) {

        var token = localStorage.getItem("token");

        var productid = this.state.productid;

        var data = {
            productid: productid,
            ratings: newRating
        }

        var config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
        axios.post(`${process.env.REACT_APP_BASE_URI}/rate/product`, data, config).then((response) => {

            this.setState({
                "userRating": newRating
            })
        })

    }


    render() {
        const {productid} = this.props;
        var commentdata = this.state.commentdata;
        var replydata = this.state.replydata;

        replydata = replydata.map((value, index) => {
            return (
                <>
                </>
            )
        })


        commentdata = commentdata.map((value, index) => {
            return (
                <div className="container-fluid venue-comments mt-5" key={index}><div className="row">
                    <div className="col-2 col-md-2 col-lg-2 col-sm-2">
                        <div className=" cmt-img">
                            <img src={`${process.env.PUBLIC_URL}/user-comments.png`} className="cmt-profile-img" />

                        </div>
                    </div>
                    <div className="col-9 col-md-9 col-lg-9 col-sm-9">
                        <div className="cmt-details p-2">
                            <h6 className="bold-title">{value.userid.fullname}</h6>
                            <p className="text-justify">
                                {value.comment}
                            </p>
                           
  
                        </div>

                    </div>
                    {
                        (this.state.token != null) ?

                            (localStorage.getItem("userid") === value.userid._id) ?

                                <div className="col-1 col-md-1 col-lg-1 col-sm-1">

                                    <span style = {{cursor : "pointer"}} className="fa fa-trash" onClick={() => this.handleDeleteComment(value._id)}></span><span> </span>

                                </div>
                                :
                                ""

                            :

                            ""

                    }
                </div>
                </div>
            )
        })

        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-5">
                <div className="venue-view-body">
                    {(localStorage.getItem("token") != null) ?
                        <div>
                            <div className="rating">
                                <h5> Your Ratings: </h5>
                                <StarRatings
                                    rating={this.state.userRating}
                                    starRatedColor="gold"
                                    starDimension="30px"
                                    starSpacing="3px"
                                    numberOfStars={5}
                                    changeRating={this.rateProduct.bind(this)}
                                    name="stars"
                                    starHoverColor="gold"


                                />

                            </div>



                            <div className="venue-comment-form mt-5">
                                <form onSubmit={this.handleCommentSubmit.bind(this)}>
                                    <textarea value={this.state.empValue} onChange={this.handleCommentChange.bind(this)} className="venue-comment-control" ref="comment" placeholder="Write Your Comments"></textarea>

                                    <button className="btn btn-danger">Submit Comment</button>
                                </form>
                            </div>
                            <div className="venue-comment-section mt-5">
                                <h5 className="ligh-bold">Comments </h5><hr />
                                {commentdata}
                            </div>

                        </div>
                        :
                        <div className="alert alert-warning"><span className="fas fa-exclamation-triangle"></span> &nbsp; You must <Link to="/login">Login</Link>  to post reviews</div>
                    }


                </div>
            </div>
        )
    }
}