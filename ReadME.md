# Relief-Dash

## Running the Application

1. Start both frontend and backend services:

```bash
docker-compose up --build
```

2. Access the applications:
   - Backend: http://localhost:8000
   - Frontend: http://localhost:3000

## Notes
1. If you see
```
failed to solve: node:23-alpine: failed to resolve source metadata for docker.io/library/node:23-alpine: failed to authorize: failed to fetch oauth token: Post "https://auth.docker.io/token": EOF
```
just run ```docker-compose up --build``` again, i've no idea why it happens

2. If you need to install a package on the frontend or backend, follow this procedure:
   1. Install the package using `npm install <package-name>` in the respective directory (frontend or backend) locally
   2. If installed a package on the backend, run pip freeze > requirements.txt in the backend directory
   3. rerun ```docker-compose up --build``` to rebuild the docker images
   
3. If dependencies don't seem to be syncing to container after adding them locally, run ```docker-compose down -v``` to remove volumes and then ```docker-compose up --build``` to rebuild the images

## License

See the LICENSE file for details.