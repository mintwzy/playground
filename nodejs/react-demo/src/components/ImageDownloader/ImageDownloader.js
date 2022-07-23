import React, { useEffect, useState } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import { downloadImages, getImageDownloads, toggleEnable } from '../../api';

import './imageDownloader.css';
import Button from 'react-bootstrap/Button';
import io from 'socket.io-client';

const ImageDownloader = () => {
	const [imageDownloads, setImageDownloads] = useState([]);

	useEffect(() => {
		getImageDownloads()
			.then(res => {
				setImageDownloads(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		const socket = io('http://localhost:3000');
		socket.on('connect', () => {
			console.log('websocket connected');

			socket.on('done', () => {
				alert('Download DONE, enjoy~');
			});
		});
	}, []);

	const columns = [{
		dataField: 'id',
		text: 'id',
		sort: true
	}, {
		dataField: 'base_link',
		text: 'base_link',
		style: {
			wordWrap: 'break-word'
		},
		sort: true
	}, {
		dataField: 'end_index',
		text: 'end_index',
		sort: true
	}, {
		dataField: 'save_folder',
		text: 'save_folder',
		sort: true
	}, {
		dataField: 'enable',
		text: 'enable',
		sort: true,
		style: (cell) => {
			if (cell) {
				return {
					color: 'red'
				};
			}
		},
		events: {
			onClick: (e, column, columnIndex, row) => {
				return toggleEnable(row.id, !row.enable)
					.then((res) => {
						window.location.reload(false);
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}];

	const pagination = paginationFactory({
		sizePerPage: 10
	});

	const download = () => {
		downloadImages()
			.catch(err => {
				console.log(err);
				alert('error downloading');
			});
	};

	return (
		<div>
			<div className={'imageDownloader'}>
				<BootstrapTable keyField={'id'} data={imageDownloads} columns={columns} pagination={pagination} />
			</div>
			<Button className={'downloadButton'} onClick={download}>Download</Button>
		</div>
	);
};

export default ImageDownloader;
