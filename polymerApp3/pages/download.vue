<template>
  <div>
    <input type="file" @change="loadCsvFile" />
    <p>{{ message }}</p>

    <table border="1">
      <tr v-for="(worker, index) in workers" :key="index">
        <td v-for="(column, index) in worker" :key="index">{{ column }}</td>
      </tr>
    </table>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: "",
      workers: []
    };
  },
  methods: {
    loadCsvFile(e) {
      let vm = this;
      vm.workers = [];
      vm.message = "";
      let file = e.target.files[0];
      if (!file.type.match("application/vnd.ms-excel", "text/csv")) {
        vm.message = "CSVファイルを選択してください";
        return;
      }

      let reader = new FileReader();
      reader.readAsText(file, "Shift_JIS");

      reader.onload = () => {
        let lines = reader.result.split('\r\n');
        // lines.shift();
        
        let linesArr = [];

        for (let i = 0; i < lines.length; i++) {
          linesArr[i] = lines[i].split(",");
        }
        vm.workers = linesArr;
      };
    }
  }
};
</script>