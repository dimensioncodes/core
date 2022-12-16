while :
do
read -p "Website name: " app_name
read -p "$app_name port: " app_port
read -p "$app_user user: " app_user
read -p "$app_pass pass: " app_pass

AppName=$app_name
AppPort=$app_port
AppUser=$app_user
AppPass=$app_pass


mkdir $AppName
cd $AppName
cat <<EOF > docker-compose.yml
version: '3.1'

services:

  wordpress:
    image: wordpress
    restart: always
    ports:
      - $AppPort
    environment:
      WORDPRESS_DB_HOST: db$AppName
      WORDPRESS_DB_USER: $AppUser
      WORDPRESS_DB_PASSWORD: $AppPass
      WORDPRESS_DB_NAME: db
    volumes:
      - wordpress:/var/www/html

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: db$AppName
      MYSQL_USER: $AppUser
      MYSQL_PASSWORD: $AppPass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db:/var/lib/mysql

volumes:
  wordpress:
  db:
EOF
echo DimensionCloud run "$AppName" --public --cloud --port $AppPort
wait
docker compose -p $AppName up -d
cd ..
done
