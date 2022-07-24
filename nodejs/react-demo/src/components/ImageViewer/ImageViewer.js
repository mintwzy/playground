import React, { useEffect, useState } from 'react';
import axios from 'axios';

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// slide show
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './ImageViewer.css';
import { getRandomPhotos } from '../../api';

const ImageViewer = () => {
	const [autoplay, setAutoplay] = useState(true);
	const [images, setImages] = useState([]);
	const [needUpdate, setNeedUpdate] = useState(true);
	const [fetchMsg, setFetchMsg] = useState('');
	const [indexToData, setIndexToData] = useState({});
	const [curID, setCurID] = useState(0);
	const [curPath, setCurPath] = useState('');
	const [imageCount, setImageCount] = useState(0);
	const [ready, setReady] = useState(false);
	const COUNT = 15;

	useEffect(() => {
		setReady(false);
		getRandomPhotos(COUNT)
			.then(res => {
				const tempIndexToData = {};
				setImages(res.data.data.map((d, index) => {
					tempIndexToData[index] = {
						id: d.id,
						path: d.path
					};
					return `images/${d.path}`;
				}));
				setImageCount(res.data.total);
				return tempIndexToData;
			})
			.then((tempIndexToID) => {
				setIndexToData(tempIndexToID);
				setCurID(tempIndexToID[0].id);
				setCurPath(tempIndexToID[0].path);
				setFetchMsg('Photo updated~');
				setReady(true);
			})
			.then(() => {
				// return syncPhotos();
			})
			.catch((err) => {
				console.log(err);
			});
	}, [needUpdate]);

	const onChange = (prev, next) => {
		if (ready) {
			setCurID(indexToData[next].id);
			setCurPath(indexToData[next].path);
			if (next === 0) {
				setFetchMsg('');
			}
			if (next === (COUNT - 1)) {
				setNeedUpdate(!needUpdate);
			}
		}
	};

	const deleteImage = (id) => {
		if (window.confirm(`Are you sure you want to delete ${id}`)) {
			axios.delete(`http://localhost:3000/photos/${id}`)
				.then(() => {
					console.log(`${id} deleted`);
				});
		}
	};

	return (
		<div id={'main'}>
			{/* controls */}
			<Container>
				<Row >
					<Col className={'msg'}>
            Autoplay is {autoplay ? 'on' : 'off'}
					</Col>
					<Col className={['text-center', 'msg']}>
						{imageCount} images in total.
					</Col>
					<Col className={['text-right', 'msg']}>
						{fetchMsg}
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant={'secondary'} onClick={() => setAutoplay(false)}>Pause</Button>
						<Button variant={'primary'} onClick={() => setAutoplay(true)}>Play</Button>
					</Col>
					<Col className={'text-right'}>
						<Button variant={'danger'} id={'delete-button'} onClick={() => deleteImage(curID)}>delete {curID}</Button>
					</Col>
				</Row>
				<Row className={['text-center', 'msg']}>
					<Col>
						{curPath}
					</Col>
				</Row>
			</Container>

			{/* slides */}
			<Slide duration={9000} transitionDuration={1} onChange={onChange} autoplay={autoplay}>
				{
					images.map(
						(each, index) => <img alt={each} key={index} src={each} />
					)
				}
			</Slide>
		</div>
	);
};

export default ImageViewer;
