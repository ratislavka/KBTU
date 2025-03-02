import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page'
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    title: 'Albums Page'
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent,
    title: 'Album Detail Page'
  },
  {
    path: 'albums/:id/photos',
    component: AlbumPhotosComponent,
    title: 'Album Photos Page'
  }
];
