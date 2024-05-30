import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const style = {
        backgroundColor: "#f4433661",
        color: "#E91E63",
    };

    const initstatus = [
        {
            id: 1,
            stat: true,
            route: "all",
        },
        {
            id: 2,
            stat: false,
            route: "terminee",
        },
        {
            id: 3,
            stat: false,
            route: "encoures",
        },
    ];

    const [status, setStatus] = useState(initstatus);

    let statusList = status.map((ele) => {
        return (
            <Link to={`/${ele.route}`} key={ele.id}>
                <ToggleButton
                    value={ele.id}
                    variant="outlined"
                    onClick={() => hnadelClick(ele.id)}
                    style={ele.stat === true ? style : {}}
                >
                    {ele.route}
                </ToggleButton>
            </Link>
        );
    });

    function hnadelClick(id) {
        let newStatus = [...status];

        for (let ele of newStatus) {
            if (ele.id === id) {
                ele.stat = true;
            } else {
                ele.stat = false;
            }
        }
        setStatus(newStatus);
    }

    return (
        <>
            <Stack spacing={2} direction="row">
                <ToggleButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                >
                    {statusList}
                </ToggleButtonGroup>
            </Stack>
        </>
    );
}
