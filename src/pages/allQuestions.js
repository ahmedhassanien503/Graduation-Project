import React , {Component} from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import NavbarSection from '../components/NavbarSection.js';
import HeaderSection from '../components/HeaderSection.js';
import FooterSection from '../components/FooterSection.js';
import SocialSection from '../components/SocialSection.js';

class allQuestions extends Component {
    constructor()
    {
        super();
        this.state={
        questions:[],
        activePage:1,
        itemsCountPerPage:1,
        totalItemsCount:1,
        pageRangeDisplayed:2,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/questions')
       .then(result=>{this.setState({
           questions:result.data.data,
           itemsCountPerPage:result.data.meta.per_page,
           totalItemsCount:result.data.meta.total,
           activePage:result.data.meta.current_page,
        })});

    }

  
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get(`http://127.0.0.1:8000/api/questions/?page=${pageNumber}`)
        .then(result=>{
            this.setState({
                questions:result.data.data,
                itemsCountPerPage:result.data.meta.per_page,
                totalItemsCount:result.data.meta.total,
                activePage:result.data.meta.current_page,
            });});
      }

  render(){
    return (
        <div className="container">
            
            <NavbarSection/>
            <HeaderSection/>
<div>
<br/>
        <h2 style={{ textAlign: "center", color:"#e07b39"}}>اسئلة الاعضاء</h2>
        <br/>
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}> <Link to={'/askquestion'}> <button type="button" className="btn btn-outline-dark"> <i className="fas fa-plus-circle"></i>  اضف سؤالك </button></Link>
</div>
<hr/>

{this.state.questions.map(question=>{
            return(
       

            <div className="col-12" key={question.id}>
                <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                
                    {/* <div className="post-thumb"> */}
                    <img src={`http://localhost:8000/uploads/user/${question.user_info.image}`} alt="" width="90" height="90" />

                    {/* </div> */}
                 
                    <div className="post-content container">
                        <div className="post-meta d-flex">
                            <div className="post-author-date-area d-flex">
                             
                                <div className="post-author">
                                    <a href="#">بواسطة: {question.user_info.name}</a>
                                </div>
                           
                                <div className="post-date">
                                    <a href="#">  {question.created_at}</a>
                                </div>
                            </div>
                       
                           
                        </div>
                        {/* <a href="#">
                            <h4 className="post-headline">{recipe.RecipeName}</h4>
                        </a> */}
                        <br/>
                        <p>{question.question}</p>
                        <div className="post-thumb">
                        <Link to={`/questions/${question.id}`} className="answer-more"> التفاصيل ..</Link>
                        <Link to={`/questions/answers/${question.id}`} className="answer-more">الاجابات</Link>
                         </div>
              
                        
                    </div>
                </div>
            </div>

           

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


export default allQuestions;