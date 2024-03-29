MIGRATION

Add migration VSCode: dotnet ef migrations add InitialCreate -o Data/Migrations
Update Database: dotnet ef database update
Add ExtendedUserEntity: dotnet ef migrations add ExtendedUserEntity
Remove Migration: dotnet ef migrations remove
Adding data to DB in Json format: using Json Generator
Drop DB: dotnet ef database drop

ANGULAR
Move to Angular project: cd client (client is the name of Angular project)
Run Angular project: ng serve
Adding Bootstrap to Angular project: ng add ngx-bootstrap
Adding Font-awesome to Angular project: npm install font-awesome

Creating a Navbar to handle Login (in src/app folder): cd src/app ->  ng g c nav --skip-tests
1. Create HTML nav bar in nav.component.html
2. Create model and Login method in nav.components.ts
3. Add ngModel binding and methods in Login form (nav.component.html)
4. Add <div.container> and <app-nav> in app.component.html
5. import { FormsModule } from '@angular/forms' in app.module.ts

Creating _services folder (in src/app folder): cd src/app/_services -> ng g s account --skip-tests

Creating a Home page (in DatingApp/client/src/app folder): ng g c home --skip-tests

Creating a Register page (in DatingApp/client/src/app folder): ng g c register --skip-tests

Creating a members folder (in DatingApp/client/src/app folder): mkdir members -> cd members 
-> ng g c member-list --skip-tests -> ng g c member-detail --skip-tests
-> Back to app folder: cd.. -> ng g c lists --skip-tests -> ng g c messages --skip-tests

Adding Toast service for notifications (in DatingApp/client: Angular project): npm install ngx-toastr
-> Make changes in angular.json file: "styles":.....
"./node_modules/font-awesome/css/font-awesome.css",
"./node_modules/ngx-toastr/toastr.css",
...
-> Import ngx-toastr into app.module.ts: import { ToastrModule } from 'ngx-toastr';
ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })

Adding new Bootstrap theme (in DatingApp/client): npm install bootswatch
-> Make changes in angular.json file: "styles":.....
"./node_modules/bootswatch/dist/united/bootstrap.css",
-> ng serve to compile again.

Using shared modules (in DatingApp/client/src/app folder): mkdir _modules -> cd _modules 
-> ng g m shared --flat
-> Modify shared modules in shared.module.ts
-> Inject the SharedModule into app.module.ts

Testing error in client side (in DatingApp/client/src/app/errors folder): ng g c test-errors --skip-tests
-> In app-routing.module.ts: {path: 'errors', component: TestErrorsComponent},

Adding Error Interceptor (in app/_interceptors folder): ng g interceptor --skip-tests -> error
-> In app.module.ts: providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],

Adding flat() method in tsconfig.json: "lib": [
      "es2019",
      "es2018",
      "dom"
    ]
-> ng serve

Adding Handling NotFound page (in app/errors folder): ng g c not-found --skip-tests
-> In app-routing.module.ts: {path: 'not-found', component: NotFoundComponent},

Adding Handling ServerError page (in app/errors folder): ng g c server-error --skip-tests
-> In app-routing.module.ts: {path: 'not-found', component: NotFoundComponent},

Adding Member Service (in app/_services folder): ng g s members --skip-tests

Creating Member Card (in app/members folder): ng g c member-card --skip-tests

Using interceptors to send token (in app/_interceptors folder): ng g interceptor jwt --skip-tests

Adding Photo Gallery (in client folder): npm install @kolkov/ngx-gallery
-> Config in shared-module
-> Restart VSCode


=> Services are injectable, and singleton (only get destroyed when application closed) -> used for making HTTP requests
=> When moving between component and component in Angular, they are destroyed because not being used
=> Observable object is lazy, it doesn't do anything until we subcribe to Observable
=> Default value of boolean is FALSE, of object is NULL

.NET
Run Project: cd DatingApp (cd to .NET project) -> dotnet run
Fix conflict Windows Certificate: dotnet dev-certs https --clean -> dotnet dev-certs https --trust