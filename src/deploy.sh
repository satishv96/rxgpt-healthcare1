set -e
PROJECT_DIR="/Satish/angular/deploy/dist/rxgpt-healthcare"
WEBROOT="/var/www/html"

echo "Copying files..."
sudo rm -rf ${WEBROOT}/*
sudo cp -r ${PROJECT_DIR}/* ${WEBROOT}/
sudo chown -R www-data:www-data ${WEBROOT}
sudo nginx -s reload
echo "Deployed at $(date)"

