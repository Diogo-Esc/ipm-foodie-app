import * as React from 'react';
import { Dialog, DialogTitle, TextField, DialogContent, Button, DialogContentText, createStyles, withStyles, WithStyles, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person'
import { User } from '../dt/user';

const styles = () => createStyles({
    usernameTexfield: {
        marginBottom: '30px',
        width: '80%'
    },
    passwordTextfield: {
        marginBottom: '15px',
        width: '80%'
    },
    dialogContent: { width: '400px', margin: '0 auto' },
    signUp: { marginRight: '50px' },
    login: { width: '150px' },
    forgot: { display: 'block', float: 'left', marginTop: '10px' }
})

export interface State {
    dialogOpen: boolean;
    username: string;
}

export interface Props {
    handleLogin: (username: string) => void;
    handleCreateUser: (user: User) => void;
}

type PropsWithStyles = Props & WithStyles<typeof styles>

class Login extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)
        this.state = {
            dialogOpen: false,
            username: ''
        }
    }

    handleDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            dialogOpen: !this.state.dialogOpen
        })
    }

    handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.handleLogin(this.state.username);
        this.handleCreateNewUser();
        this.setState({
            dialogOpen: false,
            username: ''
        })
    }

    handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCreateNewUser = () => {
        const user: User = {
            username: this.state.username,
            name: this.state.username,
            description: "This is my cooking profile!",
            recipes: [],
            following: 68,
            followers: 207,
            favorites: []
        }
        this.props.handleCreateUser(user)
    }

    render = () => {
        const { classes } = this.props;

        return (
            <div>
                <Button onClick={this.handleDialog} variant={'outlined'} style={{ color: 'white', marginBottom: '25%' }}>
                    <PersonIcon /> Login</Button>
                <Dialog open={this.state.dialogOpen} onClose={this.handleDialog}>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText>Insira o seu username e password para aceder ao Foodie!</DialogContentText>
                        <FormGroup>
                            <TextField variant={'outlined'} onChange={this.handleUsernameChange}
                                className={classes.usernameTexfield} label={'Username'} />
                            <TextField variant={'outlined'} type={'password'}
                                className={classes.passwordTextfield}
                                label={'Password'} />
                            <FormControlLabel control={<Checkbox />} label={'Keep me signed in'} />
                        </FormGroup>
                    </DialogContent>
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'block' }}>
                            <Button variant={'contained'} className={classes.signUp}>Sign up</Button>
                            <Button variant={'contained'} className={classes.login} color={'primary'} onClick={this.handleLogin}>Login</Button>
                        </div>
                        <div className={classes.forgot}>
                            <a href='/' style={{ display: 'block' }}>Forgot your password?</a>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(Login)