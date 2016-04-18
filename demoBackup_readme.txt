To perform a backup on a running instance of mongod:
sudo mongodump -d codeLlama -o ~/Desktop

To restore a backup to a running instance of mongod:
mongorestore -d codeLlama  ~/Desktop/codeLlama