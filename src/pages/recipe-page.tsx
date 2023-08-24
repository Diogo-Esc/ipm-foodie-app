import * as React from 'react';
import { Typography, Grid, CardHeader, CardContent, Card, Button, Avatar, IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Recipe, RecipesObject } from '../dt/recipes';
import { User, DummyUsers } from '../dt/user';
import { RouteComponentProps, Redirect } from '@reach/router';
import { navigate } from '@reach/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExtensionIcon from '@material-ui/icons/Extension';
import StarIcon from '@material-ui/icons/Star';
import TimerIcon from '@material-ui/icons/Timer';
import TryRecipe from '../components/try-recipe';
import Comments from '../components/comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import frogFavorite from '../static/frog_favorite.png'

export interface Props {
    user: User;
    recipe?: Recipe;
    goBackPath: string,
    favorited: boolean;
    addToFavorite: (id: number) => void;
    id: number;
}

export interface State {
    snackBarOpen: boolean
}

class RecipePage extends React.Component<Props & RouteComponentProps, State> {

    constructor(props: Props & RouteComponentProps) {
        super(props)
        this.state = {
            snackBarOpen: false
        }
    }

    renderIngredients = () => {
        if (this.props.recipe) {
            return this.props.recipe.ingredients.map((ing) =>
                <Typography>{ing.quantity} de {ing.name}</Typography>
            )
        } else {
            return <div />
        }
    }

    renderSteps = () => {
        if (this.props.recipe) {
            return this.props.recipe.steps.map((step, i) =>
                <div>
                    <Typography style={{ marginBottom: '10px' }}> {i + 1}. {step.step} </Typography>
                </div>
            )
        } else {
            return <div />
        }
    }

    handleCloseSnackbar = (event: React.SyntheticEvent | React.MouseEvent) => {
        this.setState({
            snackBarOpen: false
        });
    }


    handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigate(this.props.goBackPath)
    }

    addToFavorites = () => {
        this.setState({
            snackBarOpen: true
        });
        this.props.addToFavorite(this.props.id)
    }

    findOwner = (username: string) => {
        return DummyUsers.find((user) => user.username === username);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render = () => {
        let owner;
        if (this.props.recipe) {
            owner = this.findOwner(this.props.recipe.creator);
        }
        return (
            !this.props.recipe ? <Redirect from={'/recipe'} to={'/'} noThrow /> : <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={3000}
                    onClose={this.handleCloseSnackbar}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<div>
                        {this.props.favorited && <img src={frogFavorite} style={{ width: '15%', position: 'absolute', left: 0, bottom: 0 }} />}<Typography style={{ width: '300px', marginLeft: '15%' }}>{this.props.favorited ? 'A receita foi adicionada aos favoritos!' :
                            'A receita foi removida dos favoritos.'} </Typography></div>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleCloseSnackbar}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Button style={{ marginTop: '20px' }} onClick={this.handleButton}><ChevronLeftIcon />Voltar</Button>
                <Grid container>
                    <Grid item xs={6} style={{ padding: '30px' }}>
                        <div>
                            <img src={this.props.recipe ? this.props.recipe.image : ''} style={{ width: '100%' }} />

                            <Card>
                                <div>
                                <CardHeader style={{ position: 'relative', float:'left',top:'0px' }} 
                                title={this.props.recipe ? this.props.recipe.name : ''} 
                                />
                             {this.props.user.name !== '' ?
                            this.props.user.username !== this.props.recipe.creator &&
                            < IconButton onClick={this.addToFavorites} style={{ position: 'relative', float:'right', top:'0px', right:'0px' }}>
                                {!this.props.favorited ? <FontAwesomeIcon style={{ fontSize: '20px', color: 'black' }} icon={faHeart} />
                                    : <FontAwesomeIcon style={{ fontSize: '20px', color: 'red' }} icon={faHeartSolid} />}
                            </ IconButton>
                            : <div />}
                            </div>
                            
                                <CardContent style={{ marginTop:'10%' }} >
                                    <Avatar src={owner ? owner.image : this.props.user.image} style={{ display: 'inline-block' }} />
                                    <Typography style={{ display: 'inline-block' }}>{this.props.recipe ? this.props.recipe.creator : ''}</Typography>
                                    <Typography style={{ display: 'flex' }}><ExtensionIcon style={{ marginRight: '10px' }} /> Dificuldade: {this.props.recipe ? this.props.recipe.difficulty : ''}</Typography>
                                    <Typography style={{ display: 'flex' }}><StarIcon style={{ marginRight: '10px' }} />Classificação: {this.props.recipe ? this.props.recipe.classification : ''}</Typography>
                                    <Typography style={{ display: 'flex' }}><TimerIcon style={{ marginRight: '10px' }} />Tempo Médio: {this.props.recipe ? this.props.recipe.medTime : ''} minutos</Typography>
                                </CardContent>
              
                            </Card>
                            <Card>
                                <CardContent style={{ textAlign: 'center' }}>
                                    <TryRecipe recipe={this.props.recipe} />
                                </CardContent>
                            </Card>
                            
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '20px' }}>
                        <Typography variant={'h5'}>{this.props.recipe ? this.props.recipe.name : ''}</Typography>
                        <Typography style={{ marginTop: '15px', marginBottom: '15px' }}>{this.props.recipe ? this.props.recipe.desc : ''}</Typography>
                        <Typography variant={'h6'}>Ingredientes</Typography>
                        {this.renderIngredients()}
                        <Typography variant={'h5'} style={{ marginTop: '10px', marginBottom: '10px' }}>Passos a seguir:</Typography>
                        {this.renderSteps()}
                        <Typography variant={'h6'} style={{ marginTop: '20px', marginBottom: '10px' }}>Comentários:</Typography>
                        <Comments user={this.props.user} comments={this.props.recipe.comments} />
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default RecipePage