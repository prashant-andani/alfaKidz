import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LearningCard from '../components/LearningCard/LearningCard';
import './learning.scss';
import { animals, countries, vegetables, fruits } from '../constants/index';
import isDesktop from '../Utilities';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      list: [],
      category: '',
      fadeInClass: ''
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { match } = props;
    let list = [];
    const { category } = match.params;
    switch (category) {
      case 'animals':
        list = animals;
        break;
      case 'vegetables':
        list = vegetables;
        break;
      case 'fruits':
        list = fruits;
        break;
      case 'countries':
        list = countries;
        break;
      default:
        list = animals;
        break;
    }
    let { index } = state;
    if (state.category !== category) {
      index = 0;
    }
    return { list, index, category };
  }

  onSwipe = side => {
    const { list, index } = this.state;
    // Left: true, Right: false
    if (side) {
      if (index < list.length - 1) {
        this.setState(
          {
            index: index < list.length - 1 ? index + 1 : list.length - 1,
            fadeInClass: 'fade-in-right'
          },
          () => {
            setTimeout(() => this.setState({ fadeInClass: '' }), 300);
          }
        );
      }
    } else if (index > 0) {
      this.setState({ index: index > 0 ? index - 1 : 0, fadeInClass: 'fade-in-left' }, () => {
        setTimeout(() => this.setState({ fadeInClass: '' }), 300);
      });
    }
    this.renderCard(list[this.state.index]);
  };

  renderCards = data =>
    data.map((animal, i) => <LearningCard key={i} title={animal.name} image={animal.image} />);

  renderCard = card => {
    if (card) {
      return (
        <LearningCard
          title={card.name}
          image={card.image}
          fadeInClass={this.state.fadeInClass}
          onSwipe={this.onSwipe}
        />
      );
    }
    return null;
  };

  render() {
    const { list, index } = this.state;
    return (
      <div className="card-container">
        {isDesktop() ? this.renderCards(list) : this.renderCard(list[index])}
      </div>
    );
  }
}

Learning.propTypes = {
  match: PropTypes.object.isRequired
};

Learning.defaultProps = {};

export default Learning;
