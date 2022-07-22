import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header () {
	return (
		<Navbar bg="dark" expand="lg" variant={'dark'}>
			<LinkContainer to="/">
				<Navbar.Brand>Media Viewer</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to={'image-viewer'}>
						<Nav.Link>Image Viewer</Nav.Link>
					</LinkContainer>
					<LinkContainer to={'image-stat'}>
						<Nav.Link>Image Stat</Nav.Link>
					</LinkContainer>
					<LinkContainer to={'image-downloader'}>
						<Nav.Link>Image Downloader</Nav.Link>
					</LinkContainer>
					<LinkContainer to={'video-stat'}>
						<Nav.Link>Video Stat</Nav.Link>
					</LinkContainer>
					<LinkContainer to={'video-list'}>
						<Nav.Link>Video List</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
