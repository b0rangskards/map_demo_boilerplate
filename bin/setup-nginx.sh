#!/usr/bin/env bash

sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/gis_boilerplate
sudo rm /etc/nginx/sites-enabled/gis_boilerplate
sudo cp conf/nginx.conf /etc/nginx/sites-available/gis_boilerplate
sudo ln -s /etc/nginx/sites-available/gis_boilerplate /etc/nginx/sites-enabled/gis_boilerplate
sudo /etc/init.d/nginx reload
