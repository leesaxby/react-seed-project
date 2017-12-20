import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import List from './listRow/List';

export default function ListRow({ updateDoneStatus, listItems }) {

    const toggleDone = ({ _id, done }) => updateDoneStatus(_id, !done);

    return (
        <Row>
            <Col sm={8} lg={6} smOffset={2} lgOffset={3}>
                <List listItems={ listItems }
                          onToggleDone={ toggleDone }/>
            </Col>
        </Row>
    );
}

ListRow.defaultProps = {
    listItems: []
};
ListRow.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool
        })
    ),
    updateDoneStatus: PropTypes.func.isRequired
};
