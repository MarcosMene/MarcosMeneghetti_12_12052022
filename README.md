  <img src="./src/assets/logo.png" width="100" />  
  
# Projet 12 - SportSee - OpenClassrooms

SportSee is a project to create a dashboard page for sport coaching. The user can follow all informations about his/her sessions of coaching as well as the number of calories burned.

##### Project realized by Marcos Meneghetti

---

## Prerequisites

- NodeJS (version 16.15.0 LTS)
- Yarn

---

## Dependencies

- React (v 17.0.0)
- React-dom (v 17.0.0)
- React-router-dom (v 6.3.0)
- Axios (v 0.27.2)
- Prop-types (v 15.8.1)
- Recharts (v 2.1.9)
- node-Sass (v 7.0.1)

---

## I have used

![Language - JS](https://img.shields.io/static/v1?label=Language&message=JS&color=red&style=for-the-badge&logo=javascript) ![Framework - React](https://img.shields.io/static/v1?label=Framework&message=React&color=green&style=for-the-badge&logo=react) ![Style - SASS](https://img.shields.io/static/v1?label=Style&message=SASS&color=orange&style=for-the-badge&logo=sass) ![Library - Recharts](https://img.shields.io/static/v1?label=Library&message=Recharts&color=blue&style=for-the-badge) ![Code Editor - VS Studio Code](https://img.shields.io/static/v1?label=Code+Editor&message=VS+Studio+Code&color=yellow&style=for-the-badge&logo=Visual+Studio+Code) ![Node - V16.15.0](https://img.shields.io/static/v1?label=Node&message=V16.15.0&color=brown&style=for-the-badge&logo=Node) ![HTTP Client - Axios](https://img.shields.io/static/v1?label=HTTP+Client&message=Axios&color=purple&style=for-the-badge) ![API documentation - JSDoc](https://img.shields.io/static/v1?label=API+documentation&message=JSDoc&color=pink&style=for-the-badge)

---

## How to install

- Create a main directory

- Clone the project [P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) from Github into your computer. This repo contains all the source code to run the micro API for the sports analytics dashboard SportSee.

###### In the terminal Visual Studio Code editor

- change the directory -> `cd P9-front-end-dashboard`
- `yarn` command will allow you to install the dependencies.
- `yarn dev` command will allow you to run the micro API.
- It will run on the port -> http://localhost:3000
- **Don't close the terminal.**
- Open new terminal
- Clone my project [Marcos Meneghetti - P12](https://github.com/MarcosMene/MarcosMeneghetti_12_12052022.git)

- change the directory -> cd MarcosMeneghetti_12_12052022
- `yarn` command will allow you to install the dependencies.
- `yarn start` command will allow you start the project.
- **Don't close the terminal.**

It will lunch the React app on the new port -> http://localhost:3005

---

###### The URLs

These are the only url availables to this project:

**http://localhost:3005/user/12**

**http://localhost:3005/user/18**

If you change to another number diffent of 12 or 18, you will receive a error message like user not found in french.

---

###### Change from mock to API

The file .env on the root is where you will change from mock data to API data or vice-versa.
If you want to test _mock_ data, **REACT_APP_MOCKED_DATA=true**.
If you want to change to _API_ data, **REACT_APP_MOCKED_DATA=false**.

**Everytime you change to true or false, you need to restart the application.**

- To mock data

```
- Change the .env file to REACT_APP_MOCKED_DATA=true and save it.

- In the terminal (bash of MarcosMeneghetti_12_12052022), ctrl-c to stop the application.

- Restart the application with 'yarn start'.

- If you ctrl-c to stop the backend (terminal bash of p9-front-end-dashboar),
everything must work, because your data came from mockdata.
```

- To API data

```
- Change the .env file to REACT_APP_MOCKED_DATA=false and save it.

- In the terminal (bash of MarcosMeneghetti_12_12052022), ctrl-c to stop the application.

- Restart the application with 'yarn start'.

- Now the application will works with API data.

- If you ctrl-c to stop the backend (terminal bash of p9-front-end-dashboar),
you will receive a error message in french like internet was interrupted, because now
you don't have access to the API data.

-If you want to get access to API data again, on the terminal (bash of p9-front-end-dashboar),
restart the API data with 'yarn dev'.
```

---

###### Navigation

The application will start with Karl and Cecilia avatars. Chose one of them to see his/her dashboard informations.
To come back to home page, on the top menu, click on 'Accueil'.

---

###### JSdoc

- Install `Live Server` VS Code extension.
- Create a new terminal.
- Change directory to cd MarcosMeneghetti12_12052022.
- Run the JSDoc with `yarn docs`
  If you open **docs** folder (inside MarcosMeneghetti_12_2022 folder), you will see all jsdocs in HTML format. Select one HTML file. Click right mouse button on it and Open with live Server. A new windows browser will opens, and you will have the documentation about this application.
