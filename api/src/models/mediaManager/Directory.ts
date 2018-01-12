import {IDirectory} from '../../../../shared/models/mediaManager/IDirectory';
import * as mongoose from 'mongoose';

interface IDirectoryModel extends IDirectory, mongoose.Document {

}

const directorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subDirectories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Directory'
    }
  ],
  files: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File'
    }
  ]
}, {
    timestamps: true,
});

const Directory = mongoose.model<IDirectoryModel>('Directory', directorySchema);

export {Directory, IDirectoryModel};
