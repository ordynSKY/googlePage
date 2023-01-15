import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const SearchBar = () => {
    return (
        <>
        <div
                        style={{
                            marginTop: "5%",
                            display: "flex",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "48px",
                        }}
                    >
                        <h1>Google</h1>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Paper
                            component="form"
                            sx={{
                                p: "10px 15px",
                                display: "flex",
                                alignItems: "center",
                                width: 561,
                            }}
                        >
                            <SearchIcon />

                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Google or type a URL"
                                inputProps={{
                                    "aria-label": "search google maps",
                                }}
                            />
                            <MicIcon />
                        </Paper>
                    </div>
        </>
    )
}
export default SearchBar