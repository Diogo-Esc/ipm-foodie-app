import * as React from 'react';
import CookingPost from '../components/feed-post';
import { Typography, Avatar, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { RecipesObject, Recipe, Recipes } from '../dt/recipes';
import { User } from '../dt/user';
import { RouteComponentProps, Redirect } from '@reach/router';
import * as _ from 'lodash';
import { navigate } from '@reach/router';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import DeleteIcon from '@material-ui/icons/Delete'
import deleteFrog from '../static/delete_frog.png'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export interface Props {
    user: User
    deletePosts: (recipes: Recipes) => void;
    addToFavorites: (id: number) => void;
    isFavorited: (recipe: Recipe) => boolean;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (username: string) => User;
    updatePath: (path: string) => void;
    viewingUser?: User;
    viewingRecipes?: Recipes
    viewUser: (username: string) => void;
}

export interface State {
    toDelete: number[],
    deleteMode: Boolean;
    confirmDelete: boolean;
}

class ProfilePage extends React.Component<Props & RouteComponentProps, State> {

    constructor(props: Props & RouteComponentProps) {
        super(props)
        this.state = {
            toDelete: [],
            deleteMode: false,
            confirmDelete: false,
        }
        this.props.updatePath('/profile');
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    generatePosts = () => {
        const viewingRecipes = this.props.viewingRecipes
        if (viewingRecipes && Object.keys(viewingRecipes).length > 0) {
            return Object.keys(viewingRecipes).map((recipeName, i) =>
                <CookingPost viewUser={this.props.viewUser} viewingMode={false}
                    recipe={viewingRecipes[parseInt(recipeName)]} id={parseInt(recipeName)} deleteMode={this.state.deleteMode} loggedIn={this.props.user.username !== ''} addToFavorite={this.props.addToFavorites}
                    selectForDelete={this.addToDelete} favorited={this.props.isFavorited(viewingRecipes[parseInt(recipeName)])} selectRecipe={this.props.selectRecipe}
                    getOwner={this.props.getOwner} username={this.props.user.username} />)
        }
        return Object.keys(this.props.user.recipes).map((recipeName, i) =>
            <CookingPost viewUser={this.props.viewUser} viewingMode={true}
                recipe={this.props.user.recipes[parseInt(recipeName)]} id={parseInt(recipeName)} deleteMode={this.state.deleteMode} loggedIn={this.props.user.username !== ''} addToFavorite={this.props.addToFavorites}
                selectForDelete={this.addToDelete} favorited={this.props.isFavorited(this.props.user.recipes[parseInt(recipeName)])} selectRecipe={this.props.selectRecipe}
                getOwner={this.props.getOwner} username={this.props.user.username} />)

    }

    handleDeleteMode = (event: React.MouseEvent) => {
        this.setState({
            deleteMode: true
        });
    }

    addToDelete = (id: number) => {
        const { toDelete } = this.state;
        if (toDelete.includes(id)) {
            const arg = toDelete;
            arg.splice(toDelete.indexOf(id), 1)
            this.setState({
                toDelete: arg
            })
        } else {
            this.setState({
                toDelete: toDelete.concat(id)
            })
        }
    }

    confirmDelete = (event: React.MouseEvent) => {
        this.setState({
            confirmDelete: !this.state.confirmDelete
        })
    }

    doDelete = () => {
        console.log(this.state.toDelete)
        this.props.deletePosts(_.omit(this.props.user.recipes, this.state.toDelete));
        this.setState({
            toDelete: [],
            deleteMode: false,
            confirmDelete: false
        })
    }

    cancelDelete = (event: React.MouseEvent) => {
        this.setState({
            toDelete: [],
            deleteMode: false,
            confirmDelete: false
        })
    }

    handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.props.updatePath('/');
        navigate('/')
    }

    render = () => {
        return (
            this.props.user.username === '' && !this.props.viewingUser ? <Redirect to={'/'} noThrow /> :
                <div>
                    {this.componentDidMount()}
                    <div>
                        <Button style={{ marginTop: '20px' }} onClick={this.handleButton}><ChevronLeftIcon />Voltar</Button>
                        <Grid container alignItems="center" style={{ paddingRight: '50px', paddingLeft: '80px', paddingTop: '30px', paddingBottom: '30px' }}>
                            <Grid item style={{ width: '200px' }}>
                                <Avatar src={this.props.viewingUser ? this.props.viewingUser.image : this.props.user.image} style={{ width: '200px', height: '200px' }}>R</Avatar>
                                <Typography variant={'h6'} style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}>
                                    {this.props.viewingUser ? this.props.viewingUser.username : this.props.user.username}
                                </Typography>
                            </Grid>
                            <Grid item style={{ marginLeft: '50px' }}>
                                <Typography variant={'h5'} style={{ display: 'inline-block', marginRight: '100px' }}>{Object.keys(this.props.user.recipes).length} Recipes</Typography>
                                <Typography variant={'h5'} style={{ display: 'inline-block', marginRight: '100px' }}>
                                    {this.props.viewingUser ? this.props.viewingUser.following : this.props.user.following} Following</Typography>
                                <Typography variant={'h5'} style={{ display: 'inline-block', marginRight: '100px' }}>
                                    {this.props.viewingUser ? this.props.viewingUser.followers : this.props.user.followers} Followers</Typography>
                                <p></p><Typography variant={'h6'}>
                                    {this.props.viewingUser ? this.props.viewingUser.description : this.props.user.description}
                                </Typography>
                            </Grid>
                        </Grid>
                        <div style={{ width: '95%', height: '2px', backgroundColor: 'lightgrey', margin: '0 auto' }} />
                        {!this.props.viewingUser ? !this.state.deleteMode ?
                            <Button style={{ position: 'absolute', right: 25 }} onClick={this.handleDeleteMode}>
                                <DeleteIcon /> Apagar Posts
                        </Button>
                            :
                            <div style={{ position: 'absolute', right: 25 }}>
                                <Button style={{ float: 'right', marginRight: '40px', marginTop: '10px' }}
                                    disabled={this.state.toDelete.length === 0}
                                    color={'secondary'}
                                    onClick={this.confirmDelete}>
                                    <DeleteForeverIcon /> Confirmar apagar
                             </Button>
                                <Button onClick={this.cancelDelete} style={{ float: 'right', marginRight: '20px', marginTop: '10px' }}>Cancelar</Button>
                            </div> : <div />}
                        <div style={{ padding: '15px', paddingLeft: '20px', marginTop: '20px' }}>
                            {this.generatePosts()}
                        </div>
                    </div>
                    <Dialog open={this.state.confirmDelete}>
                        <DialogTitle>Apagar Receitas</DialogTitle>
                        <DialogContent>
                            <Typography style={{ marginBottom: '60px' }}>Tem a certeza que deseja apagar as receitas que escolheu? Esta ação é irreversível.</Typography>
                            <img src={deleteFrog} style={{ width: '40%', position: 'absolute', left: 0, bottom: 0, opacity: 0.5, }} />
                        </DialogContent>
                        <DialogActions style={{ position: 'relative' }}><Button onClick={this.cancelDelete}>Não</Button><Button color={'secondary'} onClick={this.doDelete}>Sim</Button></DialogActions>
                    </Dialog>
                </div >
        )
    }
}

export default ProfilePage