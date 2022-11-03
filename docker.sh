#!/bin/sh

aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 076162133364.dkr.ecr.ap-southeast-2.amazonaws.com

docker buildx build --platform=linux/amd64 -t bureaunext .

docker tag bureaunext:latest 076162133364.dkr.ecr.ap-southeast-2.amazonaws.com/bureaunext:latest

docker push 076162133364.dkr.ecr.ap-southeast-2.amazonaws.com/bureaunext:latest