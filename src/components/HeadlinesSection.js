import React , {Component} from 'react';
class HeadlineSection extends Component {
 

  render(){
   
    return (
        <div className="HeadlineSection">

<div className="breadcumb-area">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="bradcumb-title text-center">
                        <h2>عنوان الصفحة </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="breadcumb-nav">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Archive Page</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>



</div>

);
}
  }



export default HeadlineSection;