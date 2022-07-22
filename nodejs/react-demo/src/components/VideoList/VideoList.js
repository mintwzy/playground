import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { video, getVideoTypes, updateVideoType } from '../../api';
import './VideoList.css';

const VideoList = () => {
	const [videoList, setVideoList] = useState([]);
	const [videoTypes, setVideoTypes] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const paginationOption = {
		paginationSize: limit,
		totalSize: 500,
		onPageChange: (page) => {
			setPage(page);
		},
		onSizePerPageChange: (sizePerPage) => {
			setLimit(sizePerPage);
		},
		sizePerPageList: [{
			text: '5', value: 5
		}, {
			text: '10', value: 10
		}, {
			text: '15', value: 15
		}]
	};

	useEffect(() => {
		getVideoTypes()
			.then(res => {
				setVideoTypes(res.data.map(d => {
					return {
						label: d.name,
						value: d.id
					};
				}));
			})
			.then(() => {
				return video(limit, page)
					.then(res => {
						setVideoList(res.data.data.map(d => {
							return {
								id: d.id,
								idol: d.idol.name,
								name: d.path.split('/').slice(-1)[0],
								type: d.videoType ? d.videoType.name : ''
							};
						}));
					});
			})
			.catch(err => {
				console.log(err);
			});
	}, [page, limit]);

	const columns = [
		{
			dataField: 'id',
			text: 'id',
			headerStyle: (column, colIndex) => {
				return { width: '80px' };
			}
		},
		{
			dataField: 'idol',
			text: 'idol',
			editable: false,
			headerStyle: (column, colIndex) => {
				return { width: '200px' };
			}
		},
		{
			dataField: 'type',
			text: 'type',
			headerStyle: (column, colIndex) => {
				return { width: '150px' };
			},
			formatter: (cell, row) => {
				return cell;
			},
			editor: {
				type: Type.SELECT,
				options: videoTypes
			}
		},
		{
			dataField: 'name',
			text: 'name',
			editable: false
		}
	];

	return (
		<div>
			<BootstrapTable
				keyField="id"
				remote={true}
				onTableChange={() => {}}
				data={ videoList }
				columns={ columns }
				pagination={ paginationFactory(paginationOption) }
				cellEdit={ cellEditFactory({
					mode: 'click',
					blurToSave: true,
					afterSaveCell: (oldValue, newValue, row, column) => {
						console.log(oldValue);
						console.log(newValue);
						// we save the new value if needed
						if (newValue && newValue !== oldValue) {
							return updateVideoType(row.id, row.type);
						}
					}
				}) }
			/>
		</div>
	);
};

export default VideoList;
