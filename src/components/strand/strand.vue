<template>
  <div class="container">
    <div class="form-row">
      <div class="col">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="strand in strandList"
            :key="strand.ID"
          >{{ strand.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Strand',
    data() {
        return {
            strandList: [
                {ID: 1, name: 'first strand'},
                {ID: 2, name: 'second strand'},
                {ID: 3, name: 'third strand'},
                {ID: 4, name: 'fourth strand'},
                ],
        }
    },
}
</script>

<style>
</style>
