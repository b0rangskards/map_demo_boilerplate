#!/usr/bin/env bash

#sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/demo
sudo rm /etc/nginx/sites-enabled/demo
sudo cp conf/local/demo_nginx.conf /etc/nginx/sites-available/demo
sudo ln -s /etc/nginx/sites-available/demo /etc/nginx/sites-enabled/demo
sudo /etc/init.d/nginx reload
