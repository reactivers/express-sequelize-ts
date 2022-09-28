# Getting Started
- Make sure the ports "5500" and "4500" are available on your end!
    - Postgres -> `5500`
    - Backend -> `4500`
- Edit `.env` files before you start
- Edit `container_name` fields in `docker-compose.yml` file
- Edit `init.sql` database names
> Note!
- Make sure database names are matched in `init.sql` and `.env` files!

# Installation
```
yarn
```

# Running Tests
```
npm run test
```

# Docker
## BUILD
```
docker-compose up -d --build
```

## Address
The app will be running at 
```
http://localhost:4500
```

# Clean
```
docker-compose down --remove-orphans --rmi "local" --volumes
```