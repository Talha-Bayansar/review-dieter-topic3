import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    nav: {
        fontSize: "1.5em",
        color: "#fff",
        backgroundColor: "#21bf53",
        textAlign: "center",
        padding: "1%",
    },
    back: {
        fontSize: "2em",
        color: "#fff",
        fontWeight: 400,
    },
}));

export function Nav(props) {
    const classes = useStyles();
    const { isPokemonInfo, offset, setOffset, limit, setLimit } = props;
    return (
        <nav className={classes.nav}>
            <Grid container>
                {isPokemonInfo && (
                    <Grid sm={1} item>
                        <Link className={classes.back} to={"/"}>
                            <ArrowBackIcon />
                        </Link>
                    </Grid>
                )}
                <Grid sm={11} item>
                    <p>Pokédex</p>
                </Grid>
            </Grid>
            <div>
                start:{" "}
                <input
                    type="number"
                    value={offset}
                    onChange={(e) => {
                        setOffset(e.target.value);
                    }}
                />
                offset:{" "}
                <input
                    type="number"
                    value={limit}
                    onChange={(e) => {
                        setLimit(e.target.value);
                    }}
                />
            </div>
        </nav>
    );
}
