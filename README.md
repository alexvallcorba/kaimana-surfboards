
Kaimana-Surfboards 

https://kaimana-surfboards.netlify.app/

App for users/surfers to buy or customize a surfboard. They have to sign up to be able to create, edit  or delete  the customized surfboard. They can buy an already shaped surfboard too.

<br>

## MVP
Kaimana Surfboards is a surfing shop where users can buy and create their own boards. Also they will be able to share their own boards measurement with other users.

<br>

### Goals

- To have a fully functioning website that surfers can use to buy and build custom surfboards . Without logging in, you can view the surfboards product list that the app offers if you don't want to build your own custom board.
Once a user exists (signs up for account), if they are logged in, they can create their custom surfboard, edit,  update and delete.
- The app will have a cart where users can add the products they want to buy. They will be able to dekete any item that they won'want to buy at that mopment.



<br>

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  React           | _React is a free and open-source front-end JavaScript library for building user interfaces or UI components. _ |
|  React Route     | _Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application._ |
|  Rubi            | _Ruby is an interpreted, high-level, general-purpose programming language._ |
|  Rubi on rails   | _Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages_ |
| Axios            | _Axios is a promise based HTTP client for the browser and Node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React. _ |
| PostgreSQL | _Database management system emphasizing extensibility and SQL compliance. _ |


<br>

## WIREFRAMES
- Desktop view.

![imgAlt](https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633356734/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana-desktop1_bbl42x.png)

(https://www.figma.com/proto/C4AsSxA93sGGR1GxG86BIR/kaimana-app-desk-top-version?node-id=312%3A2&scaling=contain&page-id=0%3A1)

- Mobile view.

![imgAlt](https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633267773/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/figma-kaimana-phone-version_b0oq8l.png)

(https://www.figma.com/proto/ODbbrapS3KGfaIPf2ikYNS/kaimana-app-mobile-version?scaling=scale-down&page-id=0%3A1&node-id=312%3A2)



#### Component Tree

![imgAlt](https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633284895/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana_app_components_rs7jjt.png)





#### Component Architecture



``` structure

src
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ Context.js
|__ assets/
      |__ fonts
      |__ images
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ components/
      |__ Nav.jsx
      |__ Footer.js
      |__ Main.js
      |__ css/
        |__ Nav.css
        |__ Footer.css
        |__ Main.css
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ Surfboards.js
      |__ Customs.js
|__ screens/
      |__ Sign In.jsx
      |__ Sign Up.jsx
      |__ Home.jsx
      |__ Surfboards.js
      |__ SurfboardDetail.jsx
      |__ Customs.jsx
      |__ CustomCreate.jsx
      |__ CustomEdit.jsx
      |__ ShoppingCart.jsx
      |__ css/
        |__ Sign In.css
        |__ Sign Up.css
        |__ Home.css
        |__ Surfboards.css
        |__ SurfboardDetail.css
        |__ Customs.css
        |__ CustomCreate.css
        |__ CustomEdit.css
        |__ ShoppingCart.css



    
```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.


| Task                                                                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create user model with controllers, routes                                      |    H     |     3 hrs      |               |             |
| Create surfboard model with controllers, routes                                 |    H     |     3 hrs      |               |             |
| Create customs model with controllers, routes                                   |    H     |     3 hrs      |               |             |
| Migrate, test routes / associations                                             |    H     |     2 hrs      |               |             |
| Implement / Test user authentication for CRUD                                   |    H     |     5 hrs      |               |             |
| Custom routes                                                                   |    H     |     3 hrs      |               |             | 
| Create seed file to test and Finish back-end                                    |    H     |     3 hrs      |               |             |
| Build Home Screen / Create SurfboardsList and SurfboardDetail Component Screens |    H     |     4 hrs      |               |             |
| Render List of Surfboards to SurfboardsList screen                              |    H     |     3 hrs      |               |             |
| Link to detail. Render Surfboard details to SurfboardDetail screen              |    H     |     3 hrs      |               |             |
| Create EditLocation, CreateLocation, EditArtist, AddArtwork screens             |    H     |     3 hrs      |               |             |
| Create Form in CustomCreate, Test Post                                          |    H     |     3 hrs      |               |             |
| Copy Form in CustomEdit                                                         |    H     |     3 hrs      |               |             |
| Test Put, Delete for Edit Custom                                                |    H     |     2 hrs      |               |             |
| CSS                                                                             |    H     |     10 hrs     |               |             |
| TOTAL                                                                           |    H     |     50 hrs     |               |             |




> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

![imgAlt](https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633352577/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana1_mc79q5.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!
- The app will have a cart where users can add the products they want to buy. They will be able to delete any item that they won'want to buy at that time or in crease and decrease the quantity of that item.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.






