import React from 'react'
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

// import Input from '../../shared/components/Input';




const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 345,
        "border-radius": "30px"
    },
    cardMedia: {
        height: 275,
    },
    cardFooter: {
        "justify-content": "center"
    },
    cardAvatar: {
        height: '150px', width: '150px', " margin-left": "28%", "margin-top": "6%"
    }
});

const MapCard = ({ location, handleOpenTable }) => {

    const classes = useStyles();


    const onButtonClicked=()=>{
        handleOpenTable();

        
    }

    return (
        <Grid item xs={12} sm={6} md={3} style={{ zIndex: 2 }} >
            <Card className={classes.cardRoot} >

                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={location.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center" style={{ fontWeight: "bold" }}>
                            {location.title}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardFooter} >

                    <input type="button" className="btn btn-primary px-4" onClick={handleOpenTable} value="בחר מחלק" style={{ background: "#3bb6b1", fontWeight: 'bold', marginRight: "20px" }} />
                </CardActions>

            </Card>
        </Grid>


    )

}


export default MapCard;