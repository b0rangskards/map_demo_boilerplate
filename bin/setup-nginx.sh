#!/usr/bin/env bash

sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/demo_boilerplate
sudo rm /etc/nginx/sites-enabled/demo_boilerplate
sudo cp conf/demo_boilerplate_nginx.conf /etc/nginx/sites-available/demo_boilerplate
sudo ln -s /etc/nginx/sites-available/demo_boilerplate /etc/nginx/sites-enabled/demo_boilerplate
sudo /etc/init.d/nginx reload
