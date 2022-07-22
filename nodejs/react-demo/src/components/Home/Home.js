import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './Home.css';
import { createPhotoDownload, getRandomPhotos } from '../../api';
import { getDownloadData } from '../../api/photo-downloads';

function Home () {
	const [bgImage, setBgImage] = useState('');
	const [numValue, setNumValue] = useState(0);
	const [linkValue, setLinkValue] = useState('');
	const [folderValue, setFolderValue] = useState('');

	useEffect(() => {
		getRandomPhotos(1)
			.then(res => {
				const path = `images/${res.data.data[0].path}`;
				setBgImage(path);
			});
	}, []);

	const downloadPhoto = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formDataObj = Object.fromEntries(formData.entries());
		const baseLink = formDataObj.url;
		const endIndex = formDataObj.photo_count - 1;
		const saveFolder = formDataObj.save_folder;
		return createPhotoDownload(baseLink, endIndex, saveFolder)
			.then(() => {
				alert('Download info added, enjoy~');
			})
			.catch(err => {
				console.log(err);
			});
	};

	const generateData = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formDataObj = Object.fromEntries(formData.entries());
		const url = formDataObj.url;
		return getDownloadData(url).then(res => {
			const { name, link, number } = res.data;
			setNumValue(number);
			setLinkValue(link);
			setFolderValue(name);
		});
	};

	return (
		<div id={'home'}>
			<img className={'demo-bg'} src={bgImage} alt={''}/>
			<div className={'center'}>
				<Form onSubmit={generateData}>
					<Form.Group>
						<Form.Label className={'home-label'}>Page link</Form.Label>
						<Form.Control className={'url-input'} type="input" name={'url'} placeholder="Please paste page URL here" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Generate data for downloading
					</Button>
				</Form>
				<Form onSubmit={downloadPhoto}>
					<Form.Group>
						<Form.Label className={'home-label'}>Base link</Form.Label>
						<Form.Control readOnly className={'url-input'} type="input" name={'url'}
						              placeholder="Please paste photo URL here" value={linkValue} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Number of photos</Form.Label>
						<Form.Control readOnly className={'number-input'} type="input" name={'photo_count'} value={numValue}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Folder name</Form.Label>
						<Form.Control readOnly className={'folder-input'} type="input" name={'save_folder'} value={folderValue}/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Add photos to download
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default Home;
