import React  ,{Component , useState}from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Pagination from "react-js-pagination";
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';
import Cookies from 'universal-cookie';
import axios from 'axios';

class Answers extends Component {

    constructor()
    {
        super();
        this.cookies = new Cookies();
        this.is_auth = this.cookies.get('UserData');
        this.state={
            answers:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:2,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    componentDidMount()
    {
       axios.get(`http://127.0.0.1:8000/api/questions/answers/${this.props.match.params.id}`)
       .then(
           res=>{this.setState({
            answers: res.data.data,
            itemsCountPerPage:res.data.meta.per_page,
            totalItemsCount:res.data.meta.total,
            activePage:res.data.meta.current_page,
        })},
           );

    }


    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get(`http://127.0.0.1:8000/api/questions/answers/${this.props.match.params.id}/?page=${pageNumber}`)
        .then(result=>{
            this.setState({
                answers: result.data.data,
                itemsCountPerPage:result.data.meta.per_page,
                totalItemsCount:result.data.meta.total,
                activePage:result.data.meta.current_page,
            });});
      }

    onDelete(id)
    {
        axios.delete(`http://127.0.0.1:8000/api/answers/delete/${id}`)
        .then(response=>{
            // console.log("deleted");
            this.props.history.push('/questions');

        }

        );
    }

    render(){
        return(
<div>
<NavbarSection/>
            <HeaderSection/>

<div className="comment_area section_padding_50 clearfix container">
    <h4 className="mb-30"style={{ textAlign: "center", color:"#e07b39"}}>الاجابات</h4>

    {this.state.answers.map(answer=>{
            return(
    <ol key={answer.id}>
     
        <li className="single_comment_area" >
            <div className="comment-wrapper d-flex" >
          
                <div className="comment-author">
                    <img src={`http://127.0.0.1:8000/uploads/${answer.chef_info.image}`} alt="" />
                </div>
           
                <div className="comment-content">
                    <span className="comment-date text-muted">{answer.created_at}</span>
                       <h6>بواسطة : {answer.chef_info.name}</h6>
            <p>{answer.answer}</p>
            
            {this.is_auth && this.is_auth.id && answer.chef_id == this.is_auth.id  ?
    <Link to={`/editanswer/${answer.id}`}> <button type="button" className="btn btn-outline-dark btn-sm" style={{margin:"10px"}}> <i className="far fa-edit"></i>  تعديل الاجابة </button></Link>
    :""} 

    {this.is_auth && this.is_auth.id && answer.chef_id == this.is_auth.id  ?
                  <Link >  <button type="submit" className="btn btn-outline-danger btn-sm"  onClick={() => {this.onDelete(answer.id)}}><i className="far fa-trash-alt"></i> مسح الاجابة </button> </Link>
                  :""} 
                  </div>
            </div>
        </li>
    </ol>

) } )}
   <div className="col-12">
                    <div className="pagination-area d-sm-flex mt-15"style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                    <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                    />
                    </div>
                </div>      

    </div>
<FooterSection/>
<SocialSection />
</div>
);
}
}

export default Answers;