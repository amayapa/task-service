# Tasks App Service <img src="https://github.com/larts85/task-app/blob/main/src/task-app-logo.png" width="50px" />

## This project was created with [Nodejs](https://nodejs.org/), [Express](https://expressjs.com/), [MySQL](https://www.mysql.com/), [Sequelize](https://axios-http.com/),[Docker](https://www.docker.com/),[Babel](https://babeljs.io/) and [Axios](https://axios-http.com/).

### The frontend was created with [React](https://github.com/facebook/create-react-app) and some other technologies.

#### TECHNOLOGIES

| **FullStack** | ✔          | ✔           | ✔              | ✔             | ✔                 | ✔           | ✔     |
| ------------- | ---------- | ----------- | -------------- | ------------- | ----------------- | ----------- | ----- |
| **Languages** | JavaScript |             |                |               |                   |             |       |
| **Frontend**  | React Js   | React-Redux | Redux-Persist  | React-Routing | Styled-Components | sweetalert2 | Axios |
| **Backend**   | NodeJs     | Express     | Docker Compose | Sequelize     | MySQL             | Axios       | Babel |

## First Steps

1. Open a console and clone this repo `$ git clone https://github.com/larts85/task-service.git`.
2. Jump into the task-service folder `$ cd task-service`.
3. By defalut the app will by running in a docker container, so you may need to [install Docker](https://docs.docker.com/get-docker/) and then:

- run `$ npm install`
- run `$ docker compose up`
- go to 'http://localhost:9000/tasks?quantity=numberOfTasks'
- to kill the procces with `ctrl + c` or `⌘ + c`
- use `$ docker compose down` to stops and removes containers, networks, volumes, and images created by `$ docker compose up`

4. If you want to use the api in local then:

- change the variaable `serviceIsRunningInDockerContainer` to `false` in the `db.js` file at `config\db.js` and run `$ npm start`.
- go to 'http://localhost:3000/tasks?quantity=numberOfTasks'

## Populating db

### In order to charge some data to display in client side you have to create a very simple MySQL database:

#### The SQL sample scripts are:

```SQL
CREATE DATABASE `tasks-service` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
```

```SQL
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `status` enum('PENDING','COMPLETED') NOT NULL DEFAULT 'PENDING',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=252 DEFAULT CHARSET=utf8;
```

```SQL
INSERT INTO `tasks-service`.`tasks`
(`id`,
`title`,
`status`,
`createdAt`,
`updatedAt`)
VALUES
(<{id: }>,
<{title: }>,
<{status: PENDING}>,
<{createdAt: }>,
<{updatedAt: }>);
```

```SQL
UPDATE `tasks-service`.`tasks`
SET
    `status` = 'COMPLETED'
WHERE
    `id` = '2';
```

#### Note:

> That Sequelize will create the table at start up if database already exist.
