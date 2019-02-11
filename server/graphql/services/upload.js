import { S3 } from 'aws-sdk'

const uploadToS3 = async (file) => {

    const client = new S3({
        accessKeyId: process.env.coreKey,
        secretAccessKey: process.env.coreSecret,
        params: {
            Bucket: 'mpsstorageus/core/profile-images'
        }
    })

    const { createReadStream, filename, mimetype, encoding } = file

    const response = await client
        .upload({
            Key: filename,
            ACL: 'public-read',
            Body: createReadStream()
        })
        .promise()

    return {
        name: filename,
        url: response.Location
    }
}

export default uploadToS3
