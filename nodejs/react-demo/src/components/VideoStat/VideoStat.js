import React, { useEffect, useState } from 'react';

import { idols } from '../../api';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './VideoStat.css';

const VideoStat = () => {
	const [idolStat, setIdolStat] = useState([]);

	useEffect(() => {
		idols()
			.then(res => {
				setIdolStat(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const columns = [{
		dataField: 'id',
		text: 'id',
		sort: true
	}, {
		dataField: 'name',
		text: 'name',
		sort: true
	}, {
		dataField: 'videos',
		text: 'videos',
		sort: true
	}];

	const pagination = paginationFactory({
		sizePerPage: 20
	});

	return (
		<div className={'idolStat'}>
			<BootstrapTable keyField={'id'} data={idolStat} columns={columns} pagination={pagination} />
		</div>
	);
};

export default VideoStat;
