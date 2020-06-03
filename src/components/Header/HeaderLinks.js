/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Fastfood, HomeSharp , ExpandMore , LockOpen ,Menu} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="انضم الينا"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={LockOpen}
          dropdownList={[
            <Link to="#" className={classes.dropdownLink}>
                لديك حساب   
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
                 انشاء حساب جديد 
             </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="المزيد"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ExpandMore}
          dropdownList={[
            <Link to="#" className={classes.dropdownLink}>
                التصنيفات   
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
                ورش الطبخ   
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
                من نحن ؟ 
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
                  للتواصل معنا 
             </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="وصفات"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Fastfood}
          dropdownList={[
            <Link to="#" className={classes.dropdownLink}>
              وصفات الطهاه
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
              وصفات المستخدمين
            </Link>,
            // <a
            //   href="#"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   وصفات المستخدمين
            // </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
         <HomeSharp className={classes.icons} /> الرئيسيه
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          // buttonText="انضم الينا"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Menu}
          dropdownList={[
            <Link to="#" className={classes.dropdownLink}>
                لديك حساب   
            </Link>,
            <Link to="#" className={classes.dropdownLink}>
                 انشاء حساب جديد 
             </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
