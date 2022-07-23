// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import IdolsLayout from 'src/layouts/IdolsLayout'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import PhotosLayout from 'src/layouts/PhotosLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/viewer" page={ViewerPage} name="viewer" />
        <Route path="/admin" page={AdminPage} name="admin" />
        <Set wrap={IdolsLayout}>
          <Route path="/idols/new" page={IdolNewIdolPage} name="newIdol" />
          <Route path="/idols/{id:Int}/edit" page={IdolEditIdolPage} name="editIdol" />
          <Route path="/idols/{id:Int}" page={IdolIdolPage} name="idol" />
          <Route path="/idols" page={IdolIdolsPage} name="idols" />
        </Set>
        <Set wrap={PhotosLayout}>
          <Route path="/photos/new" page={PhotoNewPhotoPage} name="newPhoto" />
          <Route path="/photos/{id:Int}/edit" page={PhotoEditPhotoPage} name="editPhoto" />
          <Route path="/photos/{id:Int}" page={PhotoPhotoPage} name="photo" />
          <Route path="/photos" page={PhotoPhotosPage} name="photos" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
