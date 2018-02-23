import React from 'react';
import { Row, Col } from 'react-bootstrap';
import List from './listRow/List';

export default function ListRow() {
    return (
        <Row>
            <Col sm={8} lg={6} smOffset={2} lgOffset={3}>
                <List />
            </Col>
        </Row>
    );
}
