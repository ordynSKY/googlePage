import React from "react";
import avatar from "../assets/photo_2020-10-07-10.01.38-150x150.jpeg";
import AppsIcon from "@mui/icons-material/Apps";

const Header = () => {
    return (
        <>
        
                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-end",
                            paddingTop: "10px",
                            paddingRight: "20px",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href="google.com"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                lineHeight: "28px",
                                fontSize: "13px",
                            }}
                        >
                            Gmail
                        </a>
                        <a
                            href="google.com"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                lineHeight: "28px",
                                fontSize: "13px",
                                paddingLeft: "15px",
                                paddingRight: "15px",
                            }}
                        >
                            Images
                        </a>
                        <a href="google.com" style={{ color: "white" }}>
                            <AppsIcon />
                        </a>
                        <a href="google.com">
                            <img
                                src={avatar}
                                alt="avatar"
                                style={{
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    paddingLeft: "15px",
                                }}
                            />
                        </a>
                    </div>
                
        </>
    )
}

export default Header