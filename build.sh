export $(cat .env.prod | xargs) && docker-compose build
