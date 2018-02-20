import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import listImage from 'Images/list.png';

export default function HeaderRow() {
	return (
	    <Row>
	        <Col sm={1} lg={1} smOffset={4} lgOffset={5}>
	            <Image src={ listImage }
	                   alt="List Image"
	                   style={{ 'height': '200px',
	                            'marginBottom': '20px' }}/>
								asdasdsdasd
	        </Col>
	    </Row>
	);
}
