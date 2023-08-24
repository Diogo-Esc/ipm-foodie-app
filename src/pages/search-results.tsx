import * as React from 'react';
import CookingPost from '../components/feed-post';
import { Typography, Button, Grid } from '@material-ui/core';
import { RecipesObject, Recipe, Recipes } from '../dt/recipes';
import { RouteComponentProps, navigate } from '@reach/router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { User } from '../dt/user';

interface Prop {
    addToFavorites: (id: number) => void;
    isFavorited: (recipe: Recipe) => boolean;
    searchResults: Recipe[];
    loggedIn: boolean;
    selectRecipe: (recipe: Recipe) => void;
    getOwner: (username: string) => User;
    search: String;
    updatePath: (path: string) => void;
    viewUser: (username: string) => void;
    viewingUser?: User;
}

class SearchResultsPage extends React.Component<Prop & RouteComponentProps> {

    constructor(props: Prop & RouteComponentProps) {
        super(props);
        this.props.updatePath('/search');
    }

    generatePosts = () => {
        const arr = Object.keys(RecipesObject).filter((recipeName, i) => this.props.searchResults.includes(RecipesObject[i]))
        return arr.map((recipeName, i) => <CookingPost viewUser={this.props.viewUser} viewingMode={this.props.viewingUser ? true : false}
            favorited={this.props.isFavorited(RecipesObject[parseInt(arr[i])])} username={''}
            addToFavorite={this.props.addToFavorites} selectRecipe={this.props.selectRecipe} getOwner={this.props.getOwner}
            recipe={RecipesObject[parseInt(arr[i])]} id={parseInt(arr[i])} deleteMode={false} loggedIn={this.props.loggedIn} />)
    }

    goBack = (event: React.MouseEvent) => {
        this.props.updatePath('/');
        navigate('/')
    }

    render = () => {
        return (
            <div>
                <Button onClick={this.goBack} style={{ marginTop: '10px', marginLeft: '15px' }}><ChevronLeftIcon /> Retornar</Button>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Typography variant={'h3'} style={{ marginLeft: '15px', marginTop: '20px' }}>Resultados para: </Typography>
                    <Typography variant={'h4'} style={{ marginLeft: '25px', marginTop: '20px' }}>{this.props.search}</Typography>
                </div>

                <Grid container style={{ padding: '15px', paddingLeft: '20px' }}>
                    {this.generatePosts()}
                </Grid>
            </div>
        )
    }
}

export default SearchResultsPage