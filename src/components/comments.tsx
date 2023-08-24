import * as React from 'react';
import { createStyles, withStyles, Theme, WithStyles, TextField, Typography, Avatar } from '@material-ui/core';
import { Comment } from '../dt/recipes';
import { User, DummyUsers } from '../dt/user';

const styles = (theme: Theme) =>
    createStyles({
        authorTypo: {
            display: 'inline-block',
            marginRight: '10px'
        },
        dateTypo: {
            letterSpacing: '1px',
            display: 'inline-block'
        },
        authorAvatar: {
            marginRight: '20px',
        },
        infoDiv: {
            display: 'inline-block',
            verticalAlign: 'middle'
        },
        newCommentDiv: {
            marginBottom: '20px',
            width: '100%',
            display: 'flex'
        },
        comment: {
            marginBottom: '20px',
            display: 'flex'
        },
        commentTextfield: {
            display: 'inline-block',
            width: '75%'
        }
    });

export interface Props {
    pastComments?: Comment[];
    // loadComments: (comments: Comment[]) => void;
    // storeComment: (comment: Comment) => void;
    comments: Comment[];
    user: User;
    handleCommentIncrease?: () => void;
}
export interface State {
    commentValue: string;
    comments: Comment[]
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

class Comments extends React.Component<PropsAndStyles, State> {
    constructor(props: PropsAndStyles) {
        super(props);
        this.state = {
            commentValue: '',
            comments: this.props.comments
        };
    }

    componentDidMount = () => {
        if (this.props.pastComments) {
            // this.props.loadComments(this.props.pastComments);
        }
    }

    renderPastComments = () => {
        const { classes } = this.props;
        return this.props.comments.map((comment, i) => {
            const author = this.getDummy(comment.author);
            return (<div key={'comment-' + i} className={classes.comment}>
                <Avatar src={author !== this.props.user ? author.image : this.props.user.image} className={classes.authorAvatar} />
                <div className={classes.infoDiv}>
                    <Typography className={classes.authorTypo}>
                        <b>{comment.author}</b>
                    </Typography>
                    <Typography>{comment.comment}</Typography>
                </div>
            </div>)
        });
    }

    getDummy = (username: string) => {
        const dummy = DummyUsers.find((user) => user.username === username)
        return dummy ? dummy : this.props.user
    }

    handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { user, handleCommentIncrease } = this.props;
        if (event.key === 'Enter' && this.state.commentValue !== '') {
            const comments = this.state.comments;
            comments.push({
                comment: this.state.commentValue,
                author: user.username,
            });
            this.setState({
                comments
            });

            if (handleCommentIncrease) {
                handleCommentIncrease();
            }

            this.setState({
                commentValue: ''
            });
        }
    }

    handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            commentValue: event.target.value
        });
    }

    render() {
        const { classes, user } = this.props;
        return (
            <div style={{ width: '100%', }}>
                {this.props.user.username !== '' &&
                    <div className={classes.newCommentDiv}>
                        <Avatar src={this.props.user.image} className={classes.authorAvatar} />
                        <TextField placeholder={'Escreva um comentário'}
                            value={this.state.commentValue}
                            onKeyPress={this.handleEnterPress}
                            onChange={this.handleCommentChange}
                            fullWidth
                            className={classes.commentTextfield} />
                    </div>}
                <div>
                    {this.renderPastComments()}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Comments);