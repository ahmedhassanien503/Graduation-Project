import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);
export default function SeasonSection() {
    const classes = useStyles();
  
  
  return (
   
  
    <div className={classes.section}>
    <div className="container" >
    <h2 className={classes.title}> سفراتنا الموسمية</h2>

    <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                <img src="img/catagory-img/easter2.jpg" alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <a href="#">
                        <h5 className={classes.cardTitle}>شم النسيم</h5>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                <img src="img/catagory-img/christmas3.jpg" alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <a href="#">
                        <h5 className={classes.cardTitle}>رأس السنة</h5>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                <img src="img/catagory-img/mother4.jpg" alt="" width="340" height="240"/>
                <div className="catagory-title">
                    <a href="#">
                        <h5 className={classes.cardTitle}>عيد الام</h5>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

  );
}
