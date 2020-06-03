import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Pagination from "components/Pagination/Pagination.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/hasanen.jpg";
import team2 from "assets/img/faces/manar.jpg";
import team3 from "assets/img/faces/yasmine.jpg";
import team4 from "assets/img/faces/mayar.jpg";
const useStyles = makeStyles(styles);

export default function ChefSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>ها هم شيفتنا</h2>
      <div>
        <GridContainer>
        {/* <Pagination pages = {2} color="red"> */}
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                احمد حسانبن
                <br />
                <small className={classes.smallTitle}>شيف مطعم تكا</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                يمكنك كتابة تفاصيل هنا عن أحد أعضاء فريقك. يمكنك إعطاء مزيد من التفاصيل حول ما يفعلونه. لا تتردد في الإضافة
                  بعض <a href="#pablo">الروابط</a> ليتمكن الأشخاص من متابعتهم خارج الموقع.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                منار السيد
                <br />
                <small className={classes.smallTitle}>شيف مطعم كريف</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                يمكنك كتابة تفاصيل هنا عن أحد أعضاء فريقك. يمكنك إعطاء مزيد من التفاصيل حول ما يفعلونه. لا تتردد في الإضافة
                  بعض <a href="#pablo">الروابط</a> ليتمكن الأشخاص من متابعتهم خارج الموقع.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              ياسمين خالد
                <br />
                <small className={classes.smallTitle}>شيف في هيلتون</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                مكنك كتابة تفاصيل هنا عن أحد أعضاء فريقك. يمكنك إعطاء مزيد من التفاصيل حول ما يفعلونه. لا تتردد في الإضافة
                  بعض  <a href="#pablo">الروابط</a> ليتمكن الأشخاص من متابعتهم خارج الموقع.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              ميار علاء 
                <br />
                <small className={classes.smallTitle}>شيف في راتاتوي</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                مكنك كتابة تفاصيل هنا عن أحد أعضاء فريقك. يمكنك إعطاء مزيد من التفاصيل حول ما يفعلونه. لا تتردد في الإضافة
                  بعض  <a href="#pablo">الروابط</a> ليتمكن الأشخاص من متابعتهم خارج الموقع.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          {/* </Pagination> */}
        </GridContainer>
      </div>
    </div>
  );
}
