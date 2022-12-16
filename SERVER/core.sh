#!/bin/sh

while :
do
read -p "Website name: " app_name
read -p "$app_name port: " app_port
read -p "$app_user user: " app_user
read -p "$app_user pass: " app_pass

AppName=$app_name
AppPort=$app_port
AppUser=$app_user
AppPass=$app_pass

mkdir $AppName
cd $AppName
wait

env=".env-sample"
cat <<EOF > $env
DB_HOST=localhost
DB_USER=$AppUser
DB_PASSWORD=$AppPass
EOF

wait

compose=docker-compose.yml
cat <<EOF > $compose
version: '3.0'
services:
   wordpress:
      image: wordpress:latest
      container_name: $AppName
      links: 
      - mariadb:mysql
      environment:
      - WORDPRESS_DB_PASSWORD= ${AppPass}
      ports:
      - "$AppPort:$AppPort"
      volumes:
      - "./html_$AppName:/var/www/html"
      restart: always

   mariadb:
      image: mariadb:latest
      container_name: db_$AppName
      environment:
      - MYSQL_ROOT_PASSWORD= ${AppPass}
      - MYSQL_DATABASE_0= wordpress_$AppName
      ports:
      - "3306:3306"
      volumes:
      - ./database_$AppName:/var/lib/mysql
      restart: always 
EOF

echo DimensionCloud run "$AppName" --public --cloud --port $AppPort --env-file .env-sample
wait
docker compose --env-file .env-sample up -d
cd ..
done