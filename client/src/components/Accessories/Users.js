import React from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import UserCard from './UserCard';

const Users = ({ users, handlers }) => {


    return (
        <Container>
            <Grid container spacing={4} direction="row-reverse">
                {
                    users?.map((user) => {
                        return <UserCard user={user} handleEditUser={() => handlers.editUser(user)} handleChatToUser={() => handlers.openChat(user)} handleNewUser={handlers.newUser} />
                    })
                }
            </Grid>
        </Container>

    )

}

export default Users;
