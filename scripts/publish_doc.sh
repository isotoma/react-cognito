#!/bin/bash

# setup repo info
git='isotoma/react-cognito'
git_url="git@github.com:$git.git"
finish_path="https://doc.esdoc.org/github.com/$git/.finish.json"

# request to create documentation
curl 'https://doc.esdoc.org/api/create' -X POST --data-urlencode "gitUrl=$git_url"
echo ''

# check to finish creating
for (( i=0; $i < 30 ; ++i )); do
  echo -n '.'
  sleep 5
  status=$(curl -Ss -o /dev/null -w '%{http_code}\n' "$finish_path")
  if [ "$status" -eq 200 ]
  then
    break;
  fi
done

echo ''
echo 'done'


