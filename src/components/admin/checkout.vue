<template>
  <div class="container">

    <div
      class="border rounded p-4"
      id="forPrint"
    >
      <div class="row m-2">
        <div class="col"><label>Fullname</label></div>
        <div class="col"><label>Date Enrolled</label></div>
      </div>
      <hr>
      <div class="row m-2">
        <div class="col"><label>Strand</label></div>
        <div class="col"><label>Grade Level</label></div>
        <div class="col"><label>Section</label></div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              Subjects
            </div>
            <div class="card-body">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Schedule</th>
                    <th scope="col">Time</th>
                    <th scope="col">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Math</td>
                    <td>M-W-F</td>
                    <td>4pm-5:30pm</td>
                    <td>comments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer text-muted">
              footer
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="btn btn-primary m-3"
      @click="print('forPrint')"
    >print</button>
  </div>
</template>

<script>
export default {
  name: "checkout",
  methods: {
    print(forPrint) {
      const contents = document.getElementById(forPrint).innerHTML;
      const originalContents = document.body.innerHTML;
      console.log(originalContents);

      document.body.innerHTML = contents;

      window.print();

      document.body.innerHTML = originalContents;
    }
  }
};
</script>

<style>
</style>
