cd SERVER
while :
do
echo ENTER WEBSITE NAME TO DELETE IT 
read -p "KILL WEBSITE: " app

AppName=$app


cd $AppName
docker-compose down
cd ..
wait
rm -r $AppName
done