import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';

const Slider = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 85px;
    border-radius: 10px;
    background-color: ${props => props.filter === 'DONE' ? '#f39c12' : '#2ecc71'};
    padding: 0 3px 0 3px;
    margin: 0 20px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
`;

const Switch = styled.div`
    height: 30px;
    width: 30px;
    margin: ${props => props.filter === 'DONE' ? 'auto' : '0 3px'};
    border-radius: 8px;
    background-color: #efefef;
    box-shadow: 0 .1429em .2143em rgba(43,43,43,.2), 0 .3572em .3572em rgba(43,43,43,.1);
`;

const FilterText = styled.span`
    display: ${props => props.show ? 'block' : 'none'};
    color: #ffffff;
    margin-left: 5px;
`;

export default class TodoFilter extends React.Component {
    render() {
        const { filter } = this.props;
        return(
            <Link to={filter === 'ACTIVE' ? '/DONE' : '/ACTIVE'} >
                <Slider filter={filter} >
                    <FilterText show={filter === 'DONE'}>
                        <FormattedMessage id="todo.filter.done"/>
                    </FilterText>

                    <Switch filter={filter}></Switch>

                    <FilterText show={filter === 'ACTIVE'}>
                        <FormattedMessage id="todo.filter.todo"/>
                    </FilterText>
                </Slider>
            </Link>
        );
    }
}

TodoFilter.propTypes = {
    filter: PropTypes.oneOf([ 'ACTIVE', 'DONE' ]).isRequired
};