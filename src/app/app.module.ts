import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MainPageArticleComponent } from './components/main-page-article/main-page-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { MainPageCompanyComponent } from './components/main-page-company/main-page-company.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { YarnComponent } from './components/yarn/yarn.component';
import { YarnPageComponent } from './pages/yarn-page/yarn-page.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component'
import { HeaderComponent } from './admin/header/header.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ProductsComponent } from './admin/content/products/products.component';
import { ProductCategoriesComponent } from './admin/content/product-categories/product-categories.component';

import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorsComponent } from './admin/content/colors/colors.component';
import { ClothComponent } from './admin/content/cloth/cloth.component';
import { ToastrModule } from 'ngx-toastr';
import { SliderContentComponent } from './admin/content/slider-content/slider-content.component';
import { MainPageBigTextComponent } from './admin/content/main-page-big-text/main-page-big-text.component';
import { MainPageSmallTextComponent } from './admin/content/main-page-small-text/main-page-small-text.component';
import { MainPageSubImagesComponent } from './admin/content/main-page-sub-images/main-page-sub-images.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    CarouselComponent,
    MainPageArticleComponent,
    FooterComponent,
    FooterContactComponent,
    MainPageCompanyComponent,
    ProductPageComponent,
    MainPageComponent,
    AboutComponent,
    AboutPageComponent,
    YarnComponent,
    YarnPageComponent,
    SidebarComponent,
    HeaderComponent,
    AdminPageComponent,
    ProductsComponent,
    ProductCategoriesComponent,
    SocialMediaComponent,
    ColorsComponent,
    ClothComponent,
    SliderContentComponent,
    MainPageBigTextComponent,
    MainPageSmallTextComponent,
    MainPageSubImagesComponent,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
