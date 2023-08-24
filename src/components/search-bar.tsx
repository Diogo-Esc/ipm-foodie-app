import * as React from 'react';
import { createStyles, WithStyles, withStyles, TextField, Link, IconButton, Card, CardContent, Button, Slider, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Rating from '@material-ui/lab/Rating';
import ExtensionIcon from '@material-ui/icons/Extension';

const styles = () => createStyles({
})

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

interface Props {
    handleSearch: (search: string) => void;
    advancedFilterSearch: (search: string, classification?: number, difficulty?: number, time?: number[], tags?: string[]) => void;
}

type PropsWithStyles = Props & WithStyles<typeof styles>

interface State {
    advancedSearch: Boolean;
    searchValue: string;
    difficulty: number;
    classification: number;
    tags: string[],
    time: number[];
}

class SearchBar extends React.Component<PropsWithStyles, State>{
    constructor(props: PropsWithStyles) {
        super(props)

        this.state = {
            advancedSearch: false,
            searchValue: '',
            tags: [],
            classification: 0,
            time: [10, 120],
            difficulty: 0
        }
    }

    handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchValue: event.target.value
        });
    }

    handleDifficulty = (event: any) => {
        this.setState({
            difficulty: event.target.value as number
        })
    }

    handleClassification = (event: any) => {
        this.setState({
            classification: event.target.value as number
        })
    }

    handleTime = (event: any, newValue: number | number[]) => {
        this.setState({
            time: newValue as number[]
        })
    }

    handleAdvancedSearch = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        this.setState({
            advancedSearch: !this.state.advancedSearch
        })
    }

    doSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { searchValue, difficulty, classification, time, tags } = this.state;
        if (this.state.advancedSearch) {
            this.props.advancedFilterSearch(searchValue, classification === 0 ? undefined : classification, difficulty === 0 ? undefined : difficulty
                , time === [10, 120] ? undefined : time,
                tags ? tags : undefined)
        } else {
            this.props.handleSearch(this.state.searchValue)
        }
    }

    handleTag = (tag: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        const tags = this.state.tags;
        if (tags.includes(tag)) {
            tags.splice(tags.indexOf(tag), 1)
        } else {
            tags.push(tag)
        }
        this.setState({
            tags
        })
    }

    render = () => {
        const { classes } = this.props;

        return (
            <div style={{ position: 'relative', width: '90vh' }}>
                <TextField style={{ width: '90%' }} label={'Pesquisar Receita'} onChange={this.handleSearchChange} />
                <IconButton onClick={this.doSearch}><SearchIcon /></IconButton>
                {!this.state.advancedSearch &&
                    <Link onClick={this.handleAdvancedSearch} style={{
                        position: 'relative', float: 'right', marginRight: '50px', marginTop: '10px',
                        display: 'flex'
                    }}>
                        Pesquisa Avançada <ArrowDropDownIcon />
                    </Link>
                }
                {this.state.advancedSearch && <Card style={{ width: '90%' }}>
                    <CardContent>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'inline-block', marginRight: '20px', marginBottom: '10px' }}>
                                <Typography>Dificuldade</Typography>
                                <StyledRating
                                    onChange={this.handleDifficulty}
                                    value={this.state.difficulty ? this.state.difficulty : 0}
                                    precision={0.5}
                                    icon={<ExtensionIcon />} />
                            </div>
                            <div style={{ display: 'inline-block' }}>
                                <Typography>Classificação</Typography>
                                <Rating
                                    onChange={this.handleClassification}
                                    value={this.state.classification ? this.state.classification : 0}
                                    precision={0.5} />
                            </div>

                            <div style={{ display: 'inline-block', width: '30%', marginLeft: '25px' }}>
                                <Typography >Tempo</Typography>
                                <Slider
                                    style={{ width: '100%' }}
                                    value={this.state.time}
                                    onChange={this.handleTime}
                                    valueLabelDisplay="auto"
                                    step={5}
                                    marks
                                    min={10}
                                    max={120}></Slider>
                                <Typography variant={'caption'}>{this.state.time[0]} a {this.state.time[1]} minutos.</Typography></div>
                            <IconButton onClick={this.handleAdvancedSearch}
                                style={{ position: 'absolute', right: 65, top: 50 }}><ArrowDropUpIcon /></IconButton></div>
                        <div style={{
                            width: '100%', height: '1px', backgroundColor: 'lightgrey', marginBottom: '5px'
                        }} />
                        <Typography>Tipos</Typography>
                        <div><Button>Vegetais</Button>
                            <Button onClick={this.handleTag('peixe')} style={this.state.tags.includes('peixe') ? { backgroundColor: 'lightgrey' } : {}}>Peixe</Button>
                            <Button onClick={this.handleTag('carne')} style={this.state.tags.includes('carne') ? { backgroundColor: 'lightgrey' } : {}}>Carne</Button>
                            <Button onClick={this.handleTag('doce')} style={this.state.tags.includes('doce') ? { backgroundColor: 'lightgrey' } : {}}>Doce</Button>
                            <Button onClick={this.handleTag('bolo')} style={this.state.tags.includes('bolo') ? { backgroundColor: 'lightgrey' } : {}}>Bolo</Button>
                            <Button onClick={this.handleTag('salgado')} style={this.state.tags.includes('salgado') ? { backgroundColor: 'lightgrey' } : {}}>Salgado</Button>
                            <Button onClick={this.handleTag('saudável')} style={this.state.tags.includes('saudável') ? { backgroundColor: 'lightgrey' } : {}}>Saudável</Button></div>
                    </CardContent>
                </Card>}
            </div>
        )
    }
}

export default withStyles(styles)(SearchBar)