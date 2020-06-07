import React, {Component} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";
import Pagination from "react-js-pagination";
class SeasonSection extends Component {

    constructor()
    {
        super();
        this.state={
            seasons:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:2,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/seasons')
       .then(res=>{
        this.setState({
            seasons:res.data.data,
            itemsCountPerPage:res.data.meta.per_page,
            totalItemsCount:res.data.meta.total,
            activePage:res.data.meta.current_page,
            

        })});
    
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        axios.get('http://127.0.0.1:8000/api/seasons?page='+pageNumber)
        .then(res=>{
            this.setState({
                seasons:res.data.data,
                itemsCountPerPage:res.data.meta.per_page,
                totalItemsCount:res.data.meta.total,
                activePage:res.data.meta.current_page,
                

            })});
      }
 

    render(){
   return(
  
    <div>
    <div className="container" >
       <br/>
       <br/>
       
    <h2 > اطباقنا الموسمية</h2>
<hr/>
    <div className="row">

        {this.state.seasons.map(season=>{
            return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                <img src={`http://localhost:8000/uploads/seasons/${season.image}`} alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <Link to={`/seasons/${season.id}`}>
                        <h5 >{season.season_name}</h5>
                    </Link>
                </div>
            </div>
        </div>
      ) } )}
       <div>
        
        </div>
      </div>
  </div>
 
     
 <div className="d-flex justify-content-center" >
 <div className="pagination-area d-sm-flex mt-15">
            <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass='page-item'
                    linkClass='page-link'
                    innerClass='pagination pagination-sm'
                    
            />
            </div>
        </div>
        </div>

  );
}
}
export default SeasonSection;