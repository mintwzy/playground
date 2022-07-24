import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import ImageViewer from './components/ImageViewer';
import ImageStat from './components/ImageStat';
import VideoStat from './components/VideoStat';
import ImageDownloader from './components/ImageDownloader/ImageDownloader';
import VideoList from './components/VideoList';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route exact path={'/image-viewer'} component={ImageViewer}/>
				<Route exact path={'/image-stat'} component={ImageStat}/>
				<Route exact path={'/image-downloader'} component={ImageDownloader}/>
				<Route exact path={'/video-stat'} component={VideoStat}/>
				<Route exact path={'/video-list'} component={VideoList}/>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
