import React, {Component} from "react";
class ChefSection extends Component {
 

    render(){
   return(
  
        <div className="container mt-5">
            <h2 className="text-center">ها هم شيفتنا</h2>
            <hr/>
            <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slide-box row">
                                <div className="col-lg-6 mb-5">
                                    <div className="media row">
                                        <div className="col-2"><img src="img/blog-img/17.jpg" className="mr-3 img-fluid" alt=""/></div>
                                        <div className="media-body col-10">
                                            <h5 className="mt-0">منار السيد</h5>
                                            <p>Customer Corp.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="col-12 content">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam eu tincidunt gravida, mi sapien scelerisque nibh, eget suscipit urna nisi at ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam eu tincidunt gravida, mi sapien scelerisque nibh, eget suscipit urna nisi at ligula. "</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 mb-5">
                                    <div className="media row">
                                        <div className="col-2"><img src="img/blog-img/17.jpg" className="mr-3 img-fluid" alt=""/></div>
                                        <div className="media-body col-10">
                                            <h5 className="mt-0">ياسمين خالد</h5>
                                            <p>Customer Corp.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="col-12 content">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam eu tincidunt gravida, mi sapien scelerisque nibh, eget suscipit urna nisi at ligula. "</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item">
                            <div className="slide-box row">
                                <div className="col-lg-6 mb-5">
                                    <div className="media row">
                                        <div className="col-2"><img src="img/blog-img/17.jpg" className="mr-3 img-fluid" alt=""/></div>
                                        <div className="media-body col-10">
                                            <h5 className="mt-0">احمد حسنين</h5>
                                            <p>Customer Corp.</p>
                                        </div>
                                    </div>
                                    <div className="row content">
                                        <p className="col-12">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam eu tincidunt gravida, mi sapien scelerisque nibh, eget suscipit urna nisi at ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam eu tincidunt gravida, mi sapien scelerisque nibh, eget suscipit urna nisi at ligula. "</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 mb-5">
                                    <div className="media row">
                                        <div className="col-2"><img src="img/blog-img/18.jpg" className="mr-3 img-fluid" alt=""/></div>
                                        <div className="media-body col-10">
                                            <h5 className="mt-0">مروة ايمن</h5>
                                            <p>Customer Corp.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="col-12 content">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam eu tincidunt gravida, mi sapien scelerisque nibh, eget suscipit urna nisi at ligula. "</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
      
 
    );
}
}
export default ChefSection;