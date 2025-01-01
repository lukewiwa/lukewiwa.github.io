#!/bin/bash

# Create buckets
s3cmd="aws s3api --endpoint-url $AWS_S3_ENDPOINT_URL"

for BUCKET_NAME in $AWS_STORAGE_BUCKET_NAME $SQLITE_OBJECT_STORAGE_BUCKET_NAME; do
    # Check if the bucket exists
    if eval "$s3cmd head-bucket --bucket $BUCKET_NAME" 2>/dev/null; then
        echo "Bucket already exists"
    else
        # Create the bucket
        eval "$s3cmd create-bucket --no-cli-pager --bucket $BUCKET_NAME"
        echo "Bucket created"
    fi
done
