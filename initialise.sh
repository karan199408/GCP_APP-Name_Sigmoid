#!/bin/bash

while getopts a: flag
do
    case "${flag}" in
        a) APP_NAME=${OPTARG};;
    esac
done

if [ -z "$APP_NAME" ];then
    echo "Please pass APP_NAME"
    exit 1
else
    sed -i "s#%APP_NAME%#$APP_NAME#" ./chart/Chart.yaml
    sed -i "s#%APP_NAME%#$APP_NAME#" ./chart/values-dev.yaml
    sed -i "s#%APP_NAME%#$APP_NAME#" ./chart/values-prod.yaml
    sed -i "s#=%APP_NAME%#=$APP_NAME#" ./pipelines/gke_ci_cd_dev.yaml
    sed -i "s#=%APP_NAME%#=$APP_NAME#" ./pipelines/gke_ci_cd_prod.yaml
    cat ./chart/Chart.yaml
    cat ./chart/values-dev.yaml
fi