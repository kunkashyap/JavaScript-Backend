import mongoose, {Schema} from 'mongoose';

const VideoSchema = new Schema(
    {
        videoFile : {
            type: String, //cloudinary url
            required: true,

        },
        thumbnail: {
            type: String, //cloudinary url
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String, //cloudinary url
            required: true,
        },
        videoDuration: {
            type: Number, // cloudinary

        },
        views : {
            type: Number,
            default: 0
        },
        isPublished : {
            type: Boolean,
            default: true
        },

        owner : {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

},{timestamps: true});


export const Video = mongoose.model('Video',VideoSchema);