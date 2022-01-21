import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { SIDEBAR_STATUS } from "./../redux/constants/actionTypes";

import TopNav from "./header/TopNav";
import Drawer from "./sidebar/Drawer";

const title = "TITLE";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
    const CODE_GENERATOR = "Code Generator";

    const dispatch = useDispatch();

    const open = useSelector((store) => {
        return store.sidebar.isVisible;
    });

    const handleDrawerClose = () => {
        dispatch({
            type: SIDEBAR_STATUS,
            isVisible: open,
        });
    };

    const sidebarItems = ["Inbox", "Starred", "Send email", "Drafts"];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <TopNav title={title} />
            <Drawer title={title} sidebarItems={sidebarItems} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
            </Box>
        </Box>
    );
}
