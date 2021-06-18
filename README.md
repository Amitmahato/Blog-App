# Blog-App

1. Create .env and add values for variables as in .env.example

## Running the project
2. Install all external dependencies of each package and link all lerna packages
```bash
yarn bootstrap
```

### Run all packages in parallel
3. Run local server in development mode for both admin(on port 3000) & user(on port 3001) packages in parallel
```bash
yarn dev
```

4. Build all packages with optimized version
```bash
yarn build
```

5. Start local server in production mode for all packages in parallel, after performing build
```bash
yarn start
````

### Run each package individually
6. Run only admin package in development mode
```bash
yarn dev:admin
```

7. Run only user package in development mode
```bash
yarn dev:user
```

8. Build only admin package
```bash
yarn build:admin
```
9. Run only admin package in production mode
```bash
yarn start:admin
```

10. Build only user package
```bash
yarn build:user
```
11. Run only user package in production mode
```bash
yarn start:user
```
