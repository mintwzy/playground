import React, {useEffect, useState} from 'react';

import './Home.css';
import { getRandomPhotos } from '../../api';

function Home () {
	const [bgImage, setBgImage] = useState('');

	useEffect(() => {
		getRandomPhotos(1).then(res => setBgImage(`images/${res.data.data[0].path}`));
	}, []);

	return (
		<div id={'home'}>
			<img className={'demo-bg'} src={bgImage} alt={bgImage}/>
		</div>
	);
}

export default Home;
