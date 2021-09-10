import React from 'react'
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
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
const UserCard = ({ user, handleEditUser, handleChatToUser, handleNewUser }) => {


    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} style={{ zIndex: 2 }}>
            <Card className={classes.cardRoot} >
                <CardActions className={classes.cardFooter} style={{ background: "#3bb6b1" }}>
                    <br />
                </CardActions>
                {/* className={classes.root} */}
                <CardActionArea>
                    <Avatar src={user.image} className={classes.cardAvatar} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center" style={{ fontWeight: "bold" }}>
                            {user.fullName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: "16px", color: "black" }}>
                            {user.type}
                        </Typography>
                        <Divider variant="middle" style={{ width: "72px", margin: "auto", marginBottom: "10px" }} />
                        <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: "16px", color: "black" }}>
                            {user.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: "16px", color: "black" }}>
                            {user.phone}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardFooter} >

                    <Button size="large" color="primary" onClick={handleNewUser}>
                        <i class="fa fa-user-plus" style={{ fontSize: '25px', color: "#3bb6b1" }}></i>
                    </Button>
                    {
                        window.name !== user.userName ? <Button size="large" color="primary" onClick={handleChatToUser}>
                            <i class="fa fa-comments" style={{ fontSize: '25px', color: "#3bb6b1" }}></i>
                        </Button> : <></>
                    }
                    <Button size="small" color="primary" onClick={handleEditUser}>
                        <i class="fa fa-pencil" style={{ fontSize: '25px', color: "#3bb6b1" }}></i>
                    </Button>

                </CardActions>

            </Card>
        </Grid>


    )

}


export default UserCard;