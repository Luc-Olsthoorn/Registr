# Registr-UF version 2.1.1

Registr is a website that allows for students to find there perfect schedule. Visit it at www.registr-uf.com

## Installation

Use [docker](https://docs.docker.com/install/) to run registr.

```
git clone https://github.com/Luc-Olsthoorn/Registr.git
```
```
docker-compose build
```
```
docker-compose up
```
Go to localhost 8080

You could also use npm. Run

```
npm install
```

```
npm start
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update readme/issues as appropriate.

## Roadmap

  - [ ] Create informational GIFS of steps on landing page

  - [ ] Update filtering to be more intuitive

  - [ ] Implement courses per major
      https://ufl.betterschedules.info/ is a great example of what needs to be done, but in a clean manner

  - [ ] Be able to search and filter by instructor

  - [ ] Auto complete - generateJSON function in server, has to be run an implemented

  - [ ] Write some sort of test methods

  - [x] Change deployment so we can get https - heroku doesnt allow this on free tier




## License
[MIT](https://choosealicense.com/licenses/mit/)
