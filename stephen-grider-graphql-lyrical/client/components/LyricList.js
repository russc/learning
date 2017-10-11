import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      // check network response to get some of this
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes++
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ content, id, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => this.onLike(id)}>thumb_up</i>
            {likes}
          </div>

        </li>
      );
    })
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql`mutation LikeLyric($id: ID){
  likeLyric(id: $id) {
    id
    likes
  }
}`;

export default graphql(mutation)(LyricList);