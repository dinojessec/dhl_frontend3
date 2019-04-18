<template>
  <div class="container">

    <div class="row mb-3">
      <div class="col">
        <div class="card text-center">
          <div class="card-header">
            Payments
          </div>
          <div class="card-body">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Payment Name</th>
                  <th scope="col">Payment type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Cashier</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>registration fee</td>
                  <td>Cash/Cheque</td>
                  <td>500</td>
                  <td>00/00/0000</td>
                  <td>cashier</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info"
                    >Edit</button>
                    <button
                      type="button"
                      class="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {{ payment }}
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add Payment
        </button>
        <!--  modal -->
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLongTitle"
                >Choose Payment</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex">
                <div class="col-4 p-2">
                  <label>Payment Name</label>
                  <select
                    name="payment"
                    id="payment"
                    class="custom-select"
                    v-model="payment.paymentName"
                  >
                    <option value="1">test1</option>
                    <option value="2">test2</option>
                  </select>
                </div>
                <div class="col-4 p-2">
                  <label>Payment Type</label>
                  <select
                    name="payment"
                    id="payment"
                    class="custom-select"
                    v-model="payment.paymentType"
                  >
                    <option value="cash">Cash</option>
                    <option value="cheque">Cheque</option>
                  </select>
                </div>
                <div class="col-4 p-2">
                  <label>Amount</label>
                  <input
                    type="text"
                    class="form-control"
                    v-validate="{ decimal:3 }"
                    name="amount"
                    v-model="payment.amount"
                  >
                  <div class="err">{{ errors.first('amount') }}</div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >Close</button>
                <button
                  type="button"
                  class="btn btn-primary"
                >Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      payment: {}
    };
  }
};
</script>

<style scoped>
</style>
