#!/bin/bash

gcloud config set project developermerch
gcloud run deploy developer-merch --source . --port 1028 --allow-unauthenticated
