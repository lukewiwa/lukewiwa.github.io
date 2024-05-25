#!/bin/bash

npm --prefix=src install

# install aws cli
architecture="$(uname -m)"
case $architecture in
    x86_64) architecture="x86_64";;
    aarch64 | armv8* | arm64) architecture="aarch64";;
    *) echo "(!) Architecture $architecture unsupported"; exit 1 ;;
esac

MAIN_DIR=$(pwd)

cd /tmp || exit
curl "https://awscli.amazonaws.com/awscli-exe-linux-${architecture}.zip" -o "awscliv2.zip"
unzip -q awscliv2.zip
./aws/install
chmod +x /usr/local/bin/aws
cd "$MAIN_DIR" || exit

# install /wait
curl https://github.com/ufoscout/docker-compose-wait/releases/download/2.12.1/wait -o /wait
chmod +x /wait

# Wait for endpoint url
WAIT_HOSTS="$AWS_S3_ENDPOINT_URL"
/wait && echo "Confirmed the following services are up: $WAIT_HOSTS"



# Create buckets
s3cmd="AWS_ACCESS_KEY_ID=$AWS_S3_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY=$AWS_S3_SECRET_ACCESS_KEY aws s3api --endpoint-url $AWS_S3_ENDPOINT_URL"

for BUCKET_NAME in $AWS_STORAGE_BUCKET_NAME $AWS_SQLITE_BUCKET_NAME; do
    # Check if the bucket exists
    if eval "$s3cmd head-bucket --bucket $BUCKET_NAME" 2>/dev/null; then
        echo "Bucket already exists"
    else
        # Create the bucket
        eval "$s3cmd create-bucket --no-cli-pager --bucket $BUCKET_NAME"
        echo "Bucket created"
    fi
done

exec "$@"
