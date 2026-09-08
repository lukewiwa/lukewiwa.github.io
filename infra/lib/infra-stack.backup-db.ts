import {
  CopyObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

export const handler = async () => {
  const SOURCE_BUCKET_NAME = process.env.SOURCE_BUCKET_NAME;
  const DEST_BUCKET_NAME = process.env.DEST_BUCKET_NAME;

  const client = new S3Client({});

  let copied = 0;
  let continuationToken: string | undefined;

  do {
    const listResult = await client.send(
      new ListObjectsV2Command({
        Bucket: SOURCE_BUCKET_NAME,
        ContinuationToken: continuationToken,
      })
    );

    for (const object of listResult.Contents ?? []) {
      if (!object.Key) continue;
      await client.send(
        new CopyObjectCommand({
          Bucket: DEST_BUCKET_NAME,
          Key: object.Key,
          CopySource: `${SOURCE_BUCKET_NAME}/${object.Key}`,
        })
      );
      copied += 1;
    }

    continuationToken = listResult.NextContinuationToken;
  } while (continuationToken);

  console.log(
    `Copied ${copied} object(s) from ${SOURCE_BUCKET_NAME} to ${DEST_BUCKET_NAME}`
  );
  return { copied };
};
