import * as React from 'react'
import { Dialog, DialogContent, Typography, Grid, IconButton, Button, withStyles, DialogActions } from '@material-ui/core'
import { Recipe } from '../dt/recipes'
import ArrowBackIcon from '@material-ui/icons/ChevronLeft'
import ArrowForwardIcon from '@material-ui/icons/ChevronRight'
import CheckIcon from '@material-ui/icons/Check'
import Rating from '@material-ui/lab/Rating'
import ExtensionIcon from '@material-ui/icons/Extension';
import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';

export interface Props {
    recipe: Recipe;
}

export interface State {
    currentStep: number;
    openDialog: boolean;
    openDialogEnding: boolean;
    difficulty: number;
    classification: number;
}

const labels: { [index: string]: string } = {
    0.5: 'Muito Fácil',
    1: 'Fácil',
    1.5: 'Fácil+',
    2: 'Fazível',
    2.5: 'Fazível+',
    3: 'Médio',
    3.5: 'Médio+',
    4: 'Difícil',
    4.5: 'Difícil+',
    5: 'Hardcore',
};


const labelsClass: { [index: string]: string } = {
    0.5: 'Terrível',
    1: 'Má',
    1.5: '??',
    2: 'Meh',
    2.5: '??',
    3: 'Média',
    3.5: '??',
    4: 'Boa',
    4.5: 'Muito Boa',
    5: 'Excelente',
};
const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

class TryRecipe extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            currentStep: 0,
            openDialog: false,
            openDialogEnding: false,
            difficulty: 0,
            classification: 0
        }
    }

    handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            currentStep: this.state.currentStep - 1
        })
    }


    handleEnd = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            openDialog: false,
            openDialogEnding: true,
            currentStep: 0,

        })
    }

    handleDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.state.openDialog) {
            this.setState({
                openDialog: !this.state.openDialog,
                currentStep: 0
            })
        } else {
            this.setState({
                openDialog: !this.state.openDialog,
            })
        }

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

    handleEndingDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            openDialogEnding: false,
            currentStep: 0
        })
    }


    render = () => {
        return (
            <div>
                <Button onClick={this.handleDialog}><Typography variant={'h5'}>Experimente a receita agora!</Typography></Button>
                <Dialog open={this.state.openDialogEnding}>
                    <DialogContent>
                        <Typography variant={'h6'} style={{ marginTop: '20px' }}>Parabéns! Já experimentou a receita. Por favor classifique-a.
                        </Typography>
                        <div>
                            <Typography>Dificuldade</Typography>
                            <div style={{ display: 'flex' }}>
                                <StyledRating
                                    onChange={this.handleDifficulty}
                                    value={this.state.difficulty ? this.state.difficulty : 0}
                                    precision={0.5}
                                    icon={<ExtensionIcon style={{ width: '50px' }} />} />
                                {labels[this.state.difficulty]}
                            </div>
                        </div>
                        <div>
                            <Typography>Classificação</Typography>

                            <Rating
                                onChange={this.handleClassification}
                                value={this.state.classification ? this.state.classification : 0}
                                precision={0.5}
                                icon={<StarIcon style={{ width: '50px' }} />} />
                            {labelsClass[this.state.classification]}
                        </div>
                        <DialogActions><Button onClick={this.handleEndingDialog}>Cancelar</Button><Button color={'primary'}
                            onClick={this.handleEndingDialog}>Confirmar</Button></DialogActions>
                    </DialogContent>
                </Dialog>
                <Dialog open={this.state.openDialog} fullWidth maxWidth={'md'} PaperProps={{ style: { height: '90%', } }} onClose={this.handleDialog}>
                    <IconButton onClick={this.handleDialog} style={{ position: 'absolute', right: 0, top: 0 }}><CloseIcon /></IconButton>
                    {this.state.currentStep !== 0 && <IconButton style={{ position: 'absolute', left: '10px', top: '50%', border: 'grey 1px solid' }} onClick={this.handlePrevious}>
                        <ArrowBackIcon />
                    </IconButton>}
                    <Grid container style={{ width: '100%', height: '100%' }}>
                        <Grid item xs={6} style={{
                            width: '50%', backgroundImage: `url(${this.props.recipe.steps[this.state.currentStep].image})`,
                            backgroundSize: 'cover', backgroundPosition: 'center center'
                        }}>
                        </Grid>
                        <Grid item xs={6} style={{ padding: 20, margin: 'auto', paddingRight: '60px' }}>
                            <Typography variant={'h5'}>{this.props.recipe.name} - Passo {this.state.currentStep + 1} de {this.props.recipe.steps.length}</Typography>
                            <div style={{ padding:'40xp' }}><Typography style={{ marginTop: '20px', marginRight:'8%' , marginLeft:'20xp'}}>{this.props.recipe.steps[this.state.currentStep].step}</Typography></div>
                            <div>blabla</div></Grid>
                    </Grid>
                    {this.state.currentStep !== this.props.recipe.steps.length - 1 ? <IconButton style={{ position: 'absolute', right: '10px', top: '50%', border: 'grey 1px solid' }}
                        onClick={this.handleNext}><ArrowForwardIcon /></IconButton> : <IconButton style={{
                            position: 'absolute', right: '10px', top: '50%', border: 'seagreen 1px solid',
                            background: 'limegreen', color: 'white'
                        }}
                            onClick={this.handleEnd}><CheckIcon /></IconButton>}
                </Dialog >
            </div >
        )
    }
}

export default TryRecipe