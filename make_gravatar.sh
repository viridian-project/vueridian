#!/bin/bash

cd "$(dirname $0)"
username=$1
url="$(php make_gravatar.php $username)"
echo "Downloading gravatar from $url"
curl $url -o "public/img/avatars/$username.png"
