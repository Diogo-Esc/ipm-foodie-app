import * as React from 'react';
import Navbar from '../components/navbar';
import Homepage from './homepage';
import ProfilePage from './profile';
import { User, DummyUsers } from '../dt/user';
import { Router, navigate } from '@reach/router';
import { RecipesObject, Recipe, Recipes, UserRecipes } from '../dt/recipes';
import MyFavoritesPage from './myfavorites-page';
import SearchResultsPage from './search-results';
import RecipePage from './recipe-page';
import { isUndefined } from 'util';

interface State {
    user: User;
    searchResults: Recipe[];
    recipeSelected?: Recipe;
    searched: String;
    goBackPath: string;
    currentRecipeId: number;
    currentViewingUser?: User;
}

class MainPageHandler extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            user: {
                name: '',
                followers: 0,
                following: 0,
                username: '',
                recipes: [],
                description: '',
                favorites: [],
            },
            searchResults: [],
            searched: '',
            recipeSelected: undefined,
            goBackPath: '/',
            currentRecipeId: -1
        };
    }

    createUser = (user: User) => {
        const newUser = user;
        const userRecipes = UserRecipes(user.username)
        user.recipes = userRecipes;
        user.image = 'https://cdn1-www.dogtime.com/assets/uploads/2015/10/cook-for-your-pets-day.jpg';
        this.setState({
            user
        })
    }

    addRecipeToUser = (recipe: Recipe) => {
        const user = this.state.user
        user.recipes = {
            ...user.recipes,
            [Object.keys(RecipesObject).length]: recipe
        }

        console.log(user)

        this.setState({
            user
        })
    }

    getRecipeId = (recipe: Recipe) => {
        const find = Object.keys(RecipesObject).find((rcp) => RecipesObject[parseInt(rcp)] === recipe)
        if (!isUndefined(find)) {
            return find
        } else {
            return '-1'
        }
    }

    selectViewRecipe = (recipe: Recipe) => {
        this.setState({
            recipeSelected: recipe,
            currentRecipeId: parseInt(this.getRecipeId(recipe))
        }, () => navigate('/recipe'))
    }

    filterSearch = (search: String) => {
        this.setState({ searched: search })
        this.setState({
            searchResults: Object.values(RecipesObject).filter((recipe) => recipe.name.toLowerCase().includes(search))
        }, () => navigate('/search'))
    }

    advancedFilterSearch = (search: string, classification?: number, difficulty?: number, time?: number[], tags?: string[]) => {
        let initialSearch = Object.values(RecipesObject).filter((recipe: Recipe) => recipe.name.toLowerCase().includes(search))

        if (tags) {

        }
        if (!isUndefined(difficulty)) {
            initialSearch = Object.values(initialSearch).filter((recipe) => recipe.difficulty <= difficulty)
        }

        if (classification) {
            initialSearch = Object.values(initialSearch).filter((recipe: Recipe) => recipe.classification >= classification)
        }

        if (time) {
            initialSearch = Object.values(initialSearch).filter((recipe: Recipe) => recipe.medTime >= time[0] && recipe.medTime <= time[1])

        }

        if (tags) {
            initialSearch = Object.values(initialSearch).filter((recipe: Recipe) => recipe.tags && recipe.tags.some((tag) => tags.includes(tag)
            ))
        }

        this.setState({
            searchResults: initialSearch
        }, () => navigate('/search'))

    }

    addToFavorites = (id: number) => {
        const userRecipes = UserRecipes(this.state.user.username)
        if (this.state.user.favorites.includes(RecipesObject[id]) || this.state.user.favorites.includes(userRecipes[id])) {
            const newUser = this.state.user;
            if (this.state.user.favorites.includes(RecipesObject[id])) {
                newUser.favorites.splice(newUser.favorites.indexOf(RecipesObject[id]), 1)
            } else {
                newUser.favorites.splice(newUser.favorites.indexOf(userRecipes[id]), 1)

            }
            this.setState({
                user: newUser
            })
        } else {
            const newUser = this.state.user;
            let recipe;
            RecipesObject[id] ? recipe = RecipesObject[id] : recipe = userRecipes[id]
            newUser.favorites = newUser.favorites.concat(recipe)
            this.setState({
                user: newUser
            })
        }
    }

    getRecipeOwner = (username: string) => {
        const user = DummyUsers.find((user) => user.username === username)
        if (user) {
            return user
        } else {
            return this.state.user
        }
    }

    isFavorited = (recipe?: Recipe) => {
        if (recipe) {
            return this.state.user.favorites.includes(recipe)
        }
        return false;
    }

    deleteUserPosts = (recipes: Recipes) => {
        const user = this.state.user;
        user.recipes = recipes;
        this.setState({
            user
        })
    }

    updateGoBackPath = (path: string) => {
        this.setState({ goBackPath: path })
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    getUserRecipes = () => {
        const viewingUser = this.state.currentViewingUser;
        if (viewingUser) {
            return Object.values(RecipesObject).filter((recipe: Recipe) => recipe.creator === viewingUser.username)
        } else {
            return []
        }
    }

    viewUser = (username: string) => {
        const dummyView = DummyUsers.find((usr) => usr.username === username)
        if (dummyView) {
            this.setState({
                currentViewingUser: dummyView
            }, () => navigate('/profile'))
        }
    }

    notViewUser = () => {
        this.setState({
            currentViewingUser: undefined
        }, () => {
            navigate('/')
            navigate('/profile')
        })
    }

    render = () => {
        console.log(this.state.user.favorites)
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Navbar createUser={this.createUser} addRecipeToUser={this.addRecipeToUser} notViewUser={this.notViewUser} />
                <Router>
                    <ProfilePage isFavorited={this.isFavorited} selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} viewingRecipes={this.getUserRecipes()} viewUser={this.viewUser}
                        deletePosts={this.deleteUserPosts} user={this.state.user} viewingUser={this.state.currentViewingUser && this.state.currentViewingUser} path={'/profile'} addToFavorites={this.addToFavorites} updatePath={this.updateGoBackPath} />

                    <Homepage addToFavorites={this.addToFavorites} loggedIn={this.state.user.username !== ''} path={'/'} selectRecipe={this.selectViewRecipe} viewUser={this.viewUser}
                        isFavorited={this.isFavorited} handleSearch={this.filterSearch} getOwner={this.getRecipeOwner} advancedFilterSearch={this.advancedFilterSearch} viewingUser={this.state.currentViewingUser} />

                    <MyFavoritesPage path={'/favorites'} user={this.state.user} addToFavorite={this.addToFavorites} isFavorited={this.isFavorited} viewUser={this.viewUser}
                        selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} updatePath={this.updateGoBackPath} viewingUser={this.state.currentViewingUser} />

                    <SearchResultsPage path={'/search'} addToFavorites={this.addToFavorites} isFavorited={this.isFavorited} searchResults={this.state.searchResults} viewUser={this.viewUser}
                        loggedIn={this.state.user.username !== ''} selectRecipe={this.selectViewRecipe} getOwner={this.getRecipeOwner} search={this.state.searched} updatePath={this.updateGoBackPath} />

                    <RecipePage path={'/recipe'} user={this.state.user} recipe={this.state.recipeSelected} goBackPath={this.state.goBackPath} favorited={this.isFavorited(this.state.recipeSelected)}
                        addToFavorite={this.addToFavorites} id={this.state.currentRecipeId} />
                </Router>
            </div>
        )
    }
}

export default MainPageHandler