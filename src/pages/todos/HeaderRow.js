import React from 'react';

import listImage from 'Images/list.png';

export default function HeaderRow() {
	return (
		<img src={ listImage }
	         alt="List Image"
			 style={{ 'height': '200px',
			 		  'marginBottom': '20px' }}/>
	);
}
