<template>
    <div id="app" class="family">
		  ファイルを選択
      <input @change="changeFile" ref="rfafile" type="file" />
      <input @click="regist" type="button" value="Upload" />
      <authenticator>
        <template v-slot="{ user, signOut }">
          <h1>Hello {{ user.username }}!</h1>
          <button @click="signOut">Sign Out</button>
        </template>
      </authenticator>
    </div>
</template>

<script>
import axios from 'axios';
Amplify.configure(awsconfig);
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default {
  data() {
    return {
      uploadfile: {},
    };
  },
  methods: {
    changeFile(e) {
      const files = e.target.files || e.dataTransfer.files;
	  // ファイルが選択されたら変数に入れる
      this.uploadfile = files[0];
    },

    async regist() {
      var params = new FormData();
      params.append('file', this.uploadfile);
      
      alert("s3アップロード完了")

      let {data} = await axios.post(
        'https://oqm87xrg9i.execute-api.ap-northeast-1.amazonaws.com/dev/s3up',
        params,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
      )
    },
  },
};
</script>