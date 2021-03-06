import React from 'react'
import { connect } from 'react-redux';

class Card extends React.Component {
    /** 
     componentDidMount() {
         let user = this.props.math.params.user
         this.setState({ user })
     }
    */
    render() {
        //const { user } = this.state
        const { title, body } = this.props.card;
        return (
            <div className='ui raised very padded text conteiner segment'
                style={{ marginTop: '80px' }}
            >
                <h3 className='ui header'>{title}</h3>
                <p>{body}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user;
    return {
        card: state.cards.find((card) => {
            return card.title === title
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch({type: 'DELETE_CARD', id: id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
