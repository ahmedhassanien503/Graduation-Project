import React , {Component} from 'react';


class SidebarSection extends Component {
 

  render(){
   
    return (
        <div className="SidebarSection ">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="blog-sidebar mt-5 mt-lg-0">
       
                        <div className="single-widget-area popular-post-widget">
                            <div className="widget-title text-center">
                                <h6>Populer Post</h6>
                            </div>
                  
                            <div className="single-populer-post d-flex">
                                <img src="img/sidebar-img/1.jpg" alt=""/>
                                <div className="post-content">
                                    <a href="#">
                                        <h6>Top Wineries To Visit In England</h6>
                                    </a>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                    
                            <div className="single-populer-post d-flex">
                                <img src="img/sidebar-img/2.jpg" alt=""/>
                                <div className="post-content">
                                    <a href="#">
                                        <h6>The 8 Best Gastro Pubs In Bath</h6>
                                    </a>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                      

                            <div className="single-populer-post d-flex">
                                <img src="img/sidebar-img/3.jpg" alt=""/>
                                <div className="post-content">
                                    <a href="#">
                                        <h6>Zermatt Unplugged the best festival</h6>
                                    </a>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                        
                            <div className="single-populer-post d-flex">
                                <img src="img/sidebar-img/4.jpg" alt=""/>
                                <div className="post-content">
                                    <a href="#">
                                        <h6>Harrogate's Top 10 Independent Eats</h6>
                                    </a>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                     
                            <div className="single-populer-post d-flex">
                                <img src="img/sidebar-img/5.jpg" alt=""/>
                                <div className="post-content">
                                    <a href="#">
                                        <h6>Eating Out On A Budget In Oxford</h6>
                                    </a>
                                    <p>Tuesday, October 3, 2017</p>
                                </div>
                            </div>
                        </div>

             
                        {/* <div className="single-widget-area add-widget text-center">
                            <div className="add-widget-area">
                                <img src="img/sidebar-img/6.jpg" alt=""/>
                                <div className="add-text">
                                    <div className="yummy-table">
                                        <div className="yummy-table-cell">
                                            <h2>Cooking Book</h2>
                                            <p>Buy Book Online Now!</p>
                                            <a href="#" className="add-btn">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
</div>
                  
                  </div>
                  </div>
                 
            

);
}
  }


export default SidebarSection;