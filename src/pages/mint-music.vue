<template>
  <div id="mint_music">
    <el-steps :active="active" simple id="stepBar">
      <el-step title="Song Info" :icon="active === 0 ? 'el-icon-edit' : 'el-icon-circle-check'"/>
      <el-step title="Collection Info" :icon="active <= 1 ? 'el-icon-view' : 'el-icon-circle-check'"/>
      <el-step title="Upload Files" icon="el-icon-upload"/>
    </el-steps>
    <div id="body">

<!----------------------------------      Song Information------------------------------------------->
      <div style="padding: 0 8rem;">
        <div id="songInfo" style="height: 100%" v-show="active === 0">
          <div id="songInfoInputs">
            <vs-input
              color="#6C63FF"
              label="Artist Name *"
              v-model="songInfo.artistName"
              placeholder="Lorena Yan"
            />
            <vs-input
              color="#6C63FF"
              label="Song Title *"
              v-model="songInfo.songTitle"
              placeholder="Hello World"
            />
            <vs-input
              color="#6C63FF"
              label="Description"
              v-model="songInfo.songDescription"
              placeholder="Relevant description of the song (e.g.:)"
            />
            <vs-input
              color="#6C63FF"
              label="Genre"
              v-model="songInfo.genre"
              placeholder="e.g.: Classical Music"
            />
            <vs-input
              color="#6C63FF"
              label="Instrument"
              v-model="songInfo.instrument"
              placeholder="e.g.: vocal, keyboard, flute..."
            />
          </div>
          <vs-button color="#6C63FF" class="prevBtn" @click="prev">
            <i class="el-icon-caret-left"/>
            Back
          </vs-button>
          <vs-button color="#6C63FF" class="nextBtn" @click="next">
            Upload Your Song
            <i class="el-icon-caret-right"/>
          </vs-button>
        </div>
      </div>

<!----------------------------------      Blockchain Collection Info---------------------------------->
      <div id="collectionInfo" style="padding: 3rem;" v-show="active === 1">
        <div style="margin-bottom: 5rem;">
          <el-radio v-model="collectionInfo.useExistingContract" :label="true">Upload to an existing collection</el-radio>
          <el-radio v-model="collectionInfo.useExistingContract" :label="false">Create new collection</el-radio>
        </div>
        <vs-input
          color="#6C63FF"
          label="Address of your Collection / Contract Address"
          v-model="collectionInfo.contractAddress"
          placeholder="e.g.: 0x1234567890123456789012345678901234567890"
          v-show="collectionInfo.useExistingContract"
        />
        <vs-input
          color="#6C63FF"
          label="Name of your new collection"
          v-model="collectionInfo.contractName"
          v-show="!collectionInfo.useExistingContract"
          placeholder="e.g.: My Cool Music"
        />
        <vs-button color="#6C63FF" class="prevBtn" @click="prev">
          <i class="el-icon-caret-left"/>
          Back
        </vs-button>
        <vs-button color="#6C63FF" class="nextBtn" @click="next">
          Next
          <i class="el-icon-caret-right"/>
        </vs-button>
      </div>

      <!----------------------------------      Upload File---------------------------------->
      <div id="uploadFile" style="padding: 0 3rem;" v-show="active === 2">
        <subtitle>Upload your mp3 file</subtitle>
        <el-upload
          class="upload-demo"
          action="https://api.nftport.xyz/v0/files"
          ref="mp3Upload"
          multiple
          :file-list="file.song"
          accept=".mp3"
          :limit="1"
          :on-exceed="mp3Exceed"
          :auto-upload="false">
          <el-button size="small" type="primary">Click to upload</el-button>
          <div slot="tip" class="el-upload__tip">Only .mp3 file is allowed</div>
        </el-upload>
        <!--        Upload cover image-->
        <subtitle style="margin-top: 1rem;">Upload your cover image (Optional)</subtitle>
        <el-upload
          class="avatar-uploader"
          action="https://api.nftport.xyz/v0/files"
          list-type="picture-card"
          ref="uploadCoverImage"
          accept=".jpeg"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-preview="handlePictureCardPreview"
          :auto-upload="false">
          <img v-if="file.coverImageURL" :src="file.coverImageURL" class="avatar" alt="">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
          <div slot="tip" class="el-upload__tip">Only jpeg is allowed</div>
        </el-upload>
        <el-dialog :visible.sync="file.dialogVisible">
          <img width="100%" :src="file.dialogImageUrl" alt="">
        </el-dialog>

        <vs-button color="#6C63FF" class="prevBtn" @click="prev">
          <i class="el-icon-caret-left"/>
          Back
        </vs-button>
        <vs-button color="#6C63FF" class="nextBtn" @click="mint">
          Mint Your Song
          <i class="el-icon-star-on"/>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitle from "../components/subtitle";
export default {
  name: "mintMusic",
  components: {Subtitle},
  data () {
    return {
      active: 0,
      songInfo: {
        artistName: "",
        songTitle: "",
        songDescription: "",
        genre: "",
        instrument: "",
        contractAddress: ""
      },
      file: {
        song: [],
        coverImageURL: "",
        dialogImageUrl: '',
        dialogVisible: false,
      },
      collectionInfo: {
        useExistingContract: true,
        contractAddress: "",
        contractName: ""
      }
    }
  },
  methods: {
    prev() {
      if (this.active === 0) {
        this.$router.push("/home");
      } else {
        this.active = this.active - 1;
      }
    },
    next() {
      if (this.active === 0) {
        if (this.songInfo.artistName.trim() === "") {
          this.$message.error("Please enter name of the artist");
        } else if (this.songInfo.songTitle.trim() === "") {
          this.$message.error("Please enter name/title of the song.");
        } else {
          this.active = this.active + 1;
        }
      } else {
        if (this.collectionInfo.useExistingContract && this.collectionInfo.contractAddress.trim() === "") {
          this.$message.error("Please enter the address of your contract/collection.");
        } else if (!this.collectionInfo.useExistingContract && this.collectionInfo.contractName.trim() === "") {
          this.$message.error("Please enter the name of the new collection you want to create.");
        } else {
          this.active = this.active + 1;
        }
      }
    },
    mint() {
      if (this.$refs.mp3Upload.uploadFiles.length === 0) {
        this.$message.error("Please upload your music mp3 file to continue.");
      } else {
        // TODO mint music
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('Please upload jpeg file');
      }
      if (!isLt2M) {
        this.$message.error('Please upload a file that is less than 2MB');
      }
      return isJPG && isLt2M;
    },
    handlePictureCardPreview(file) {
      this.file.dialogImageUrl = file.url;
      this.file.dialogVisible = true;
    },
    mp3Exceed(files, fileList) {
      this.$message.error("Only 1 mp3 file is allowed. Please remove the existing file first and then upload a new file.");
    }
  }
}
</script>

<style scoped>
#mint_music {
  margin: 1rem 7rem;
}
#body {
  background: #f4f7fa;
  height: 30rem;
  margin-top: 10px;
  border-radius: 5px;
  padding: 2rem 1rem;
  position: relative;
}
.prevBtn {
  position: absolute;
  left: 2rem;
  font-size: 1.2rem;
  bottom: 1rem;
  padding: 0 0.5rem;
}
.nextBtn {
  position: absolute;
  right: 2rem;
  font-size: 1.2rem;
  bottom: 1rem;
  padding: 0 0.5rem;
}
#songInfo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#songInfoInputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
}
/deep/ .vs-input {
  background: #6c63ff1c;
  font-size: 1.3rem;
  width: 100%;
}
/deep/ .vs-input__label--label {
  font-size: 1.3rem;
}
/deep/ .vs-input__label {
  font-size: 1rem;
}
/deep/ .vs-input-parent {
  margin: 1.2rem 0;
  width: 100%;
}
/deep/ .el-steps--simple {
  padding: 13px 6%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #6C63FF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 15rem;
  height: 15rem;
  line-height: 15rem;
  text-align: center;
}
.avatar {
  width: 15rem;
  height: 15rem;
  display: block;
}
/deep/ .avatar-uploader {
  width: 15rem;
  height: 15rem;
  overflow: hidden;
  display: inline-block;
}
/deep/ .el-upload--picture-card {
  width: 15rem;
  height: 15rem;
}
/deep/ .el-upload-list__item {
  width: 15rem;
  height: 15rem;
}
/deep/ .upload-demo {
  text-align: left;
  margin-top: 1rem;
}
/deep/ .upload-demo .el-upload-list {
  height: 2rem;
}
/deep/ .upload-demo .el-upload-list__item {
  height: 2rem;
  width: 100%;
}
/deep/ .el-radio__label {
  font-size: 1rem;
}
</style>
